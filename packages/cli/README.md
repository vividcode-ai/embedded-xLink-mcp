# @vividcodeai/embedded-xlink-mcp

MCP server for embedded debugging (ARM Cortex-M, RISC-V) via probe-rs.

## Installation

```bash
npm install -g @vividcodeai/embedded-xlink-mcp
```

## Usage

Configure in your MCP client:

```json
{
  "mcpServers": {
    "embedded-debugger": {
      "command": "embedded-xlink-mcp"
    }
  }
}
```

Full documentation: [github.com/vividcode-ai/embedded-xLink-mcp](https://github.com/vividcode-ai/embedded-xLink-mcp)

---

[中文文档](README.zh.md)
