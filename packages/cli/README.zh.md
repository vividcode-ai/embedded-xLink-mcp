# @vividcodeai/embedded-xlink-mcp

MCP 服务器，通过 probe-rs 提供嵌入式调试功能（ARM Cortex-M、RISC-V）。

## 安装

```bash
npm install -g @vividcodeai/embedded-xlink-mcp
```

## 使用

在 MCP 客户端中配置：

```json
{
  "mcpServers": {
    "embedded-debugger": {
      "command": "embedded-xlink-mcp"
    }
  }
}
```

完整文档: [github.com/vividcode-ai/embedded-xLink-mcp](https://github.com/vividcode-ai/embedded-xLink-mcp)

---

[English Documentation](README.md)
