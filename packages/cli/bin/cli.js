#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const platformMap = {
  'darwin-x64': '@vividcodeai/embedded-xlink-darwin-x64',
  'darwin-arm64': '@vividcodeai/embedded-xlink-darwin-arm64',
  'linux-x64': '@vividcodeai/embedded-xlink-linux-x64',
  'linux-arm64': '@vividcodeai/embedded-xlink-linux-arm64',
  'win32-x64': '@vividcodeai/embedded-xlink-win32-x64',
};

const key = `${process.platform}-${process.arch}`;
const pkg = platformMap[key];

if (!pkg) {
  console.error(`Unsupported platform: ${key}`);
  console.error('Supported platforms: darwin-x64, darwin-arm64, linux-x64, linux-arm64, win32-x64');
  process.exit(1);
}

let binPath;
try {
  binPath = path.resolve(
    require.resolve(pkg, { paths: [__dirname, process.cwd()] }),
    '..', 'bin',
    process.platform === 'win32' ? 'embedded-xLink-mcp.exe' : 'embedded-xLink-mcp'
  );
} catch (err) {
  console.error(`Failed to resolve platform package "${pkg}": ${err.message}`);
  console.error('Try reinstalling: npm install @vividcodeai/embedded-xlink-mcp');
  process.exit(1);
}

const child = spawn(binPath, process.argv.slice(2), { stdio: 'inherit' });
child.on('exit', (code, signal) => {
  if (signal === 'SIGTERM' && code === null) {
    process.exit(0);
  }
  process.exit(code ?? 1);
});
process.on('SIGTERM', () => child.kill('SIGTERM'));
process.on('SIGINT', () => child.kill('SIGINT'));
