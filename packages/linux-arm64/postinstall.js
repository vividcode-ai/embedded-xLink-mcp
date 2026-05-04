const { chmodSync } = require('fs');
const { join } = require('path');
try {
  chmodSync(join(__dirname, 'bin', 'embedded-xLink-mcp'), 0o755);
} catch {}
