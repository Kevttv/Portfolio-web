import { spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

const mode = process.argv[2]

if (mode !== 'mobile' && mode !== 'desktop') {
  console.error('Usage: node scripts/perf/local-audit.mjs <mobile|desktop>')
  process.exit(1)
}

const port = process.env.PERF_PORT || '3003'
const locale = process.env.PERF_LOCALE || 'es'
const url = `http://localhost:${port}/${locale}`
const outDir = join(process.cwd(), '.perf')
const outFile = join(outDir, `lighthouse-${mode}.json`)
const pnpmCommand = 'pnpm'
const useShell = process.platform === 'win32'

mkdirSync(outDir, { recursive: true })

const chromePath = process.env.CHROME_PATH || detectBrowserPath()
const env = { ...process.env }

if (chromePath) {
  env.CHROME_PATH = chromePath
}

runBuild()

const server = startServer(port)
let auditExitCode = 0

try {
  await waitForServerReady(server)

  const args = [
    'dlx',
    'lighthouse',
    url,
    '--only-categories=performance',
    '--chrome-flags=--headless',
    '--no-enable-error-reporting',
    '--output=json',
    `--output-path=${outFile}`,
    '--quiet',
  ]

  if (mode === 'desktop') {
    args.push('--preset=desktop')
  }

  const run = spawnSync(pnpmCommand, args, {
    env,
    encoding: 'utf8',
    shell: useShell,
  })

  const output = `${run.stdout || ''}\n${run.stderr || ''}`

  if (!existsSync(outFile)) {
    throw createAuditError(`Lighthouse did not produce an output report.\n${output}`, run.status || 1)
  }

  const report = JSON.parse(readFileSync(outFile, 'utf8'))
  printSummary(report, mode, url)

  if (run.status && run.status !== 0) {
    if (/EPERM/i.test(output)) {
      console.warn('Lighthouse ended with a Windows temp cleanup warning (EPERM). Report was generated.')
    } else {
      throw createAuditError(output, run.status)
    }
  }
} catch (error) {
  auditExitCode = error.exitCode || 1
  console.error(error.message || String(error))
} finally {
  await stopServer(server)
}

process.exit(auditExitCode)

function startServer(portValue) {
  return spawn(pnpmCommand, ['start', '--port', portValue], {
    env: process.env,
    shell: useShell,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function runBuild() {
  const build = spawnSync(pnpmCommand, ['build'], {
    env: process.env,
    encoding: 'utf8',
    shell: useShell,
  })

  if (build.status && build.status !== 0) {
    const output = `${build.stdout || ''}\n${build.stderr || ''}`
    console.error('Build failed before running performance audit.')
    console.error(output)
    process.exit(build.status)
  }
}

function createAuditError(message, exitCode = 1) {
  const error = new Error(message)
  error.exitCode = exitCode
  return error
}

function waitForServerReady(serverProcess) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timed out waiting for Next.js server to start.'))
    }, 45000)

    let stdoutBuffer = ''
    let stderrBuffer = ''

    const onData = (chunk) => {
      const text = chunk.toString()
      stdoutBuffer += text
      if (/Ready/i.test(text)) {
        clearTimeout(timeout)
        resolve()
      }
    }

    const onErrData = (chunk) => {
      stderrBuffer += chunk.toString()
    }

    serverProcess.stdout?.on('data', onData)
    serverProcess.stderr?.on('data', onErrData)

    serverProcess.on('exit', (code) => {
      clearTimeout(timeout)
      reject(
        new Error(
          `Server exited before becoming ready (code ${code}).\n${stdoutBuffer}\n${stderrBuffer}`
        )
      )
    })
  })
}

async function stopServer(serverProcess) {
  if (serverProcess.exitCode !== null || serverProcess.killed) {
    return
  }

  if (process.platform === 'win32' && serverProcess.pid) {
    spawnSync('taskkill', ['/PID', String(serverProcess.pid), '/T', '/F'], {
      stdio: 'ignore',
      shell: true,
    })
    return
  }

  serverProcess.kill('SIGTERM')

  await new Promise((resolve) => {
    const timeout = setTimeout(() => {
      if (serverProcess.exitCode === null) {
        serverProcess.kill('SIGKILL')
      }
      resolve()
    }, 5000)

    serverProcess.on('exit', () => {
      clearTimeout(timeout)
      resolve()
    })
  })
}

function printSummary(report, runMode, targetUrl) {
  const audits = report.audits
  const score = Math.round(report.categories.performance.score * 100)
  const fcp = Math.round(audits['first-contentful-paint'].numericValue)
  const lcp = Math.round(audits['largest-contentful-paint'].numericValue)
  const tbt = Math.round(audits['total-blocking-time'].numericValue)
  const cls = Number(audits['cumulative-layout-shift'].numericValue).toFixed(3)

  console.log('--- Performance Audit Summary ---')
  console.log(`mode: ${runMode}`)
  console.log(`url: ${targetUrl}`)
  console.log(`score: ${score}`)
  console.log(`fcp_ms: ${fcp}`)
  console.log(`lcp_ms: ${lcp}`)
  console.log(`tbt_ms: ${tbt}`)
  console.log(`cls: ${cls}`)

  const renderBlocking = audits['render-blocking-insight']?.displayValue
  if (renderBlocking) {
    console.log(`render_blocking: ${renderBlocking}`)
  }

  const imageDetails = audits['image-delivery-insight']?.details?.items || []
  console.log(`image_delivery_items: ${imageDetails.length}`)
}

function detectBrowserPath() {
  const candidates = [
    process.env.PROGRAMFILES ? `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe` : '',
    process.env['PROGRAMFILES(X86)']
      ? `${process.env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`
      : '',
    process.env.PROGRAMFILES ? `${process.env.PROGRAMFILES}\\Microsoft\\Edge\\Application\\msedge.exe` : '',
    process.env['PROGRAMFILES(X86)']
      ? `${process.env['PROGRAMFILES(X86)']}\\Microsoft\\Edge\\Application\\msedge.exe`
      : '',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/snap/bin/chromium',
  ]

  return candidates.find((candidate) => candidate && existsSync(candidate))
}
