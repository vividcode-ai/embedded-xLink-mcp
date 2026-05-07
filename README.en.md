# Embedded xLink MCP Server

[![Rust](https://img.shields.io/badge/rust-1.70+-orange.svg)](https://rust-lang.org)
[![RMCP](https://img.shields.io/badge/RMCP-0.3.2-blue.svg)](https://github.com/modelcontextprotocol/rust-sdk)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A professional Model Context Protocol (MCP) server for embedded debugging with probe-rs. Provides AI assistants with comprehensive debugging capabilities for embedded systems including ARM Cortex-M, RISC-V microcontrollers with real hardware integration.

> 📖 **Language Versions**: [English](README.en.md) | [中文](README.md)

## ✨ Features

- 🚀 **Production Ready**: Real hardware integration with 22 comprehensive debugging tools
- 🔌 **Multi-Probe Support**: J-Link, ST-Link V2/V3, DAPLink, Black Magic Probe
- 🎯 **Complete Debug Control**: Connect, halt, run, reset, single-step execution  
- 💾 **Memory Operations**: Read/write flash and RAM with multiple data formats
- 🛑 **Breakpoint Management**: Hardware and software breakpoints with real-time control
- 📱 **Flash Programming**: Complete flash operations - erase, program, verify
- 📡 **RTT Bidirectional**: Real-Time Transfer with interactive command/response system
- 🏗️ **Multi-Architecture**: ARM Cortex-M, RISC-V with tested STM32 integration
- 🤖 **AI Integration**: Perfect compatibility with Claude and other AI assistants
- 🧪 **Comprehensive Testing**: All 22 tools validated with real STM32G431CBTx hardware

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   MCP Client    │◄──►│  Embedded        │◄──►│  Debug Probe    │
│   (Claude/AI)   │    │   xLink MCP       │    │  Hardware       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────────┐
                       │  Target Device   │
                       │  (ARM/RISC-V)    │
                       └──────────────────┘
```

## 🚀 Quick Start

### Prerequisites

**Hardware Requirements:**
- **Debug Probe**: ST-Link V2/V3, J-Link, or DAPLink compatible probe
- **Target Board**: STM32 or other supported microcontroller
- **Connection**: USB cables for probe and target board

**Software Requirements:**
- Rust 1.70+ 
- probe-rs compatible debug probe drivers

### Installation

```bash
# Clone and build from source
git clone https://github.com/vividcode-ai/embedded-xLink-mcp.git
cd embedded-xLink-mcp
cargo build --release
```

### Basic Usage

**Configure MCP Clients**

#### Claude Desktop Configuration Example

Add to Claude Desktop configuration file:

**Windows Example:**
```json
{
  "mcpServers": {
    "embedded-debugger": {
      "command": "C:\\path\\to\\embedded-xLink-mcp\\target\\release\\embedded-xLink-mcp.exe",
      "args": [],
      "env": {
        "RUST_LOG": "info"
      }
    }
  }
}
```

**macOS/Linux Example:**
```json
{
  "mcpServers": {
    "embedded-debugger": {
      "command": "/path/to/embedded-xLink-mcp/target/release/embedded-xLink-mcp",
      "args": [],
      "env": {
        "RUST_LOG": "info"
      }
    }
  }
}
```

Other examples for other tools like cursor ,claude code  etc. please refer to the corresponding tool documentation

## 🎯 Try the STM32 Demo

We provide a comprehensive **STM32 RTT Bidirectional Demo** that showcases all capabilities:

```bash
# Navigate to the example
cd examples/STM32_demo

# Build the firmware  
cargo build --release

# Use with MCP server for complete debugging experience
```

**What the demo shows:**
- ✅ **Interactive RTT Communication**: Send commands and get real-time responses
- ✅ **All 22 MCP Tools**: Complete validation with real STM32 hardware
- ✅ **Fibonacci Calculator**: Live data streaming with control commands
- ✅ **Hardware Integration**: Tested with STM32G431CBTx + ST-Link V2

[📖 View STM32 Demo Documentation →](examples/STM32_demo/README.md)

### Usage Examples with AI Assistants

#### List Available Debug Probes
```
Please list available debug probes on the system
```

#### Connect and Flash Firmware
```
Connect to my STM32G431CBTx using ST-Link probe, then flash the firmware at examples/STM32_demo/target/thumbv7em-none-eabi/release/STM32_demo
```

#### Interactive RTT Communication
```
Please attach RTT and show me the data from the terminal channel. Then send a command 'L' to toggle the LED.
```

#### Memory Analysis
```
Read 64 bytes of memory from address 0x08000000 and analyze the data format
```

#### Test All 22 MCP Tools
```
Please help me test all 22 MCP embedded debugger tools with my STM32 board. Start by connecting to the probe, then systematically test each tool category: probe management, memory operations, debug control, breakpoints, flash operations, RTT communication, and session management.
```

## 🛠️ Complete Tool Set (22 Tools)

All tools tested and validated with real STM32 hardware:

### 🔌 Probe Management (3 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `list_probes` | Discover available debug probes | ✅ Production Ready |
| `connect` | Connect to probe and target chip | ✅ Production Ready |
| `probe_info` | Get detailed session information | ✅ Production Ready |

### 💾 Memory Operations (2 tools) 
| Tool | Description | Status |
|------|-------------|---------|
| `read_memory` | Read flash/RAM with multiple formats | ✅ Production Ready |
| `write_memory` | Write to target memory | ✅ Production Ready |

### 🎯 Debug Control (4 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `halt` | Stop target execution | ✅ Production Ready |
| `run` | Resume target execution | ✅ Production Ready |
| `reset` | Hardware/software reset | ✅ Production Ready |
| `step` | Single instruction stepping | ✅ Production Ready |

### 🛑 Breakpoint Management (2 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `set_breakpoint` | Set hardware/software breakpoints | ✅ Production Ready |
| `clear_breakpoint` | Remove breakpoints | ✅ Production Ready |

### 📱 Flash Operations (3 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `flash_erase` | Erase flash memory sectors/chip | ✅ Production Ready |
| `flash_program` | Program ELF/HEX/BIN files | ✅ Production Ready |
| `flash_verify` | Verify flash contents | ✅ Production Ready |

### 📡 RTT Communication (6 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `rtt_attach` | Connect to RTT communication | ✅ Production Ready |
| `rtt_detach` | Disconnect RTT | ✅ Production Ready |
| `rtt_channels` | List available RTT channels | ✅ Production Ready |
| `rtt_read` | Read from RTT up channels | ✅ Production Ready |
| `rtt_write` | Write to RTT down channels | ✅ Production Ready |
| `run_firmware` | Complete deployment + RTT | ✅ Production Ready |

### 📊 Session Management (2 tools)
| Tool | Description | Status |
|------|-------------|---------|
| `get_status` | Get current debug status | ✅ Production Ready |
| `disconnect` | Clean session termination | ✅ Production Ready |

**✅ 22/22 Tools - 100% Success Rate with Real Hardware**

## 🌍 Supported Hardware

### Debug Probes
- **J-Link**: Segger J-Link (all variants)
- **ST-Link**: ST-Link/V2, ST-Link/V3
- **DAPLink**: ARM DAPLink compatible probes
- **Black Magic Probe**: Black Magic Probe
- **FTDI**: FTDI-based debug probes

### Target Architectures
- **ARM Cortex-M**: M0, M0+, M3, M4, M7, M23, M33
- **RISC-V**: Various RISC-V cores
- **ARM Cortex-A**: Basic support

### Supported Target Chips

Built on **probe-rs v0.25**, featuring **581 flash algorithms** across **~3,843 chip models**:

#### STMicroelectronics — 23 Series
| Series | Algorithms | Variants | Examples |
|--------|:----------:|:--------:|----------|
| STM32C0 | 2 | 25 | STM32C011xx |
| STM32F0 | 3 | 76 | STM32F051xx |
| STM32F1 | 4 | 99 | STM32F103C8Tx |
| STM32F2 | 3 | 41 | STM32F207xx |
| STM32F3 | 3 | 72 | STM32F303xx |
| STM32F4 | 9 | 158 | STM32F407VGTx, STM32F429ZITx |
| STM32F7 | 22 | 110 | STM32F767xx |
| STM32G0 | 6 | 106 | STM32G031xx |
| STM32G4 | 4 | 97 | STM32G431CBTx (validation target) |
| STM32H5 | 4 | 49 | STM32H503xx |
| STM32H7 | 14 | 143 | STM32H743ZITx, STM32H750xx |
| STM32H7RS | 4 | 24 | STM32H7Rxx |
| STM32L0 | 9 | 108 | STM32L053xx |
| STM32L1 | 8 | 112 | STM32L151xx |
| STM32L4 | 18 | 159 | STM32L476RGTx |
| STM32L5 | 6 | 23 | STM32L552xx |
| STM32U0 | 2 | 34 | STM32U031xx |
| STM32U5 | 9 | 86 | STM32U585AIIx |
| STM32WB | 4 | 22 | STM32WB55CGUx |
| STM32WBA | 2 | 18 | STM32WBA52xx |
| STM32WL | 3 | 20 | STM32WL55xx |
| CC13xx/CC26xx(TI) | 3 | 15 | CC1310F128, CC2652R7F3 |

#### NXP — 22 Series
| Series | Algorithms | Variants | Examples |
|--------|:----------:|:--------:|----------|
| LPC800 | 8 | 37 | LPC845 |
| LPC54102 | 2 | 6 | LPC54102 |
| LPC546xx | 4 | 28 | LPC54606 |
| LPC5526/5528 | 2 | 8 | LPC5526 |
| LPC55S16/S26/S28/S66/S69 | 8 | 23 | LPC55S69JBD100 |
| LM3S(Stellaris) | 4 | 223 | LM3S9B96 |
| i.MX RT1010 | 1 | 2 | MIMXRT1011 |
| i.MX RT1020 | 1 | 2 | MIMXRT1021 |
| i.MX RT1050 | 2 | 4 | MIMXRT1052 |
| i.MX RT1060/1064 | 2 | 4 | MIMXRT1062 |
| i.MX RT1170 | 1 | 2 | MIMXRT1176 |
| i.MX RT1180 | 1 | 2 | - |
| i.MX RT500 | 2 | 5 | MIMXRT595 |
| i.MX RT685S | 4 | 7 | MIMXRT685 |

#### Renesas RA — 27 Series
| Series | Algorithms | Variants |
|--------|:----------:|:--------:|
| RA0E1 | 4 | 6 |
| RA2A1/A2/E1/E2/E3/L1 | 24 | 37 |
| RA4E1/E2/M1/M2/M3/T1/W1 | 29 | 42 |
| RA6E1/E2/M1~M5/T1~T3 | 52 | 80 |
| RA8D1/M1/T1 | 15 | 23 |

#### Nordic Semiconductor — 5 Series
| Series | Algorithms | Variants | Examples |
|--------|:----------:|:--------:|----------|
| nRF51 | 3 | 12 | nRF51822_xxAA |
| nRF52 | 1 | 9 | nRF52832_xxAA, nRF52840_xxAA |
| nRF53 | 4 | 5 | nRF5340_xxAA |
| nRF54 | 1 | 2 | nRF54H20 |
| nRF91 | 2 | 3 | nRF9160_xxAA |

#### Silicon Labs — 25 Series
| Series | Variants | Examples |
|--------|:--------:|----------|
| EFM32GG11B | 61 | EFM32GG11B |
| EFM32HG | 21 | EFM32HG |
| EFM32PG12B/PG1B/PG22 | 23 | EFM32PG22C200F512IM40 |
| EFM32TG11B | 53 | EFM32TG11B |
| EFR32BG12P/BG13P/BG14P/BG1P | 22 | EFR32BG12P |
| EFR32BG21/BG22 | 17 | EFR32BG22C224F512IM40 |
| EFR32FG12P~FG23(7 series) | 45 | EFR32FG23 |
| EFR32MG12P~MG22(9 series) | 78 | EFR32MG12P433F1024GM68 |

#### Microchip/Atmel SAM — 14 Series
| Series | Algorithms | Variants | Examples |
|--------|:----------:|:--------:|----------|
| SAM3U/3X | 6 | 17 | ATSAM3X8E |
| SAM4/D4 | 9 | 67 | ATSAM4S |
| SAMD10/D11/D21/D51/DA1 | 12 | 75 | ATSAMD21G18A |
| SAME51/53/54/70 | 5 | 39 | ATSAME70Q21B |
| SAMV71 | 2 | 20 | ATSAMV71Q21B |

#### Other Manufacturers
| Manufacturer | Series | Variants | Examples |
|-------------|:-----:|:--------:|----------|
| **Artery** AT32 | 1 | 249 | AT32F403ACGUx |
| **GigaDevice** GD32 | 6 (incl. RISC-V) | 191 | GD32F103C8Tx, GD32VF103 |
| **Espressif** ESP32 | 8 | 16 | ESP32, ESP32-C3/S3/H2 |
| **Texas Instruments** | 6 | 104 | TM4C123GH6PM, MSP432P401RI |
| **Infineon** XMC4000 | 1 | 56 | XMC4500/4700/4800 |
| **Holtek** HT32 | 19 | 244 | HT32F523xx |
| **Fujitsu** FM3 | 1 | 106 | MB9BF Series |
| **Raspberry Pi** | 1 | 3 | RP2040 |
| **WCH** CH32 (RISC-V) | 2 | 5 | CH32V003, CH32V307 |
| **Puya** PY32 | 1 | 31 | PY32F003/030 |
| **Maxim** | 2 | 5 | MAX32660/65 |
| **Nuvoton** MSPM0 | 3 | 31 | MSPM0G350x |
| **Vorago** | 2 | 11 | VA108xx, VA416xx |
| **Others** | ~10 | ~100 | ADuCM302x, W7500, PAC52xx, HF5032x, HC32F005, HK32F030xMxx, AIR001, SWM341, FE310(RISC-V) |

> Chip support is based on probe-rs v0.25, including **180 target definition files, 3,843 chip models, and 581 flash algorithms**. Supports full ARM Cortex-M family and RISC-V architectures.

## 🏆 Production Status

### ✅ Fully Implemented and Tested

**Current Status: PRODUCTION READY**

- ✅ **Complete probe-rs Integration**: Real hardware debugging with all 22 tools
- ✅ **Hardware Validation**: Tested with STM32G431CBTx + ST-Link V2
- ✅ **RTT Bidirectional**: Full interactive communication with real-time commands
- ✅ **Flash Operations**: Complete erase, program, verify workflow
- ✅ **Session Management**: Multi-session support with robust error handling
- ✅ **AI Integration**: Perfect MCP protocol compatibility

## 🙏 Acknowledgments

Thanks to the following open source projects:

- [probe-rs](https://probe.rs/) - Embedded debugging toolkit
- [rmcp](https://github.com/modelcontextprotocol/rust-sdk) - Rust MCP SDK
- [tokio](https://tokio.rs/) - Async runtime

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

⭐ If this project helps you, please give us a Star!