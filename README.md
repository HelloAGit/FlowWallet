# FlowWallet

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-50.7%25-3178c6.svg)
![CSS](https://img.shields.io/badge/CSS-49.3%25-264de4.svg)

FlowWallet is a consumer-first financial experience for Monad.
It is designed to feel like a modern fintech app, not a crypto trading terminal.

## What this project is

- A programmable personal finance experience built for everyday users
- A demo-first UI that makes blockchain complexity invisible in primary flows
- A foundation for Monad Testnet read operations, wallet integration, analytics, and intents

## Current product scope

- Consumer fintech dashboard
- Demo balances and activity
- Cash-flow visualization
- Spending analytics
- Financial-health indicator
- Smart savings insights
- Demo mode so no real funds are required

## Architecture principles

- Keep blockchain access behind service/adaptor modules
- Keep Chainstack RPC credentials server-side
- Keep Envio behind an analytics adapter
- Keep Aurora Intents behind an intent adapter
- Keep OpenAI API keys server-side
- Do not add private keys or seed phrases to source code

## Development sequence

1. UI
2. Demo services
3. Monad Testnet read operations
4. Wallet/account integration
5. Envio indexing
6. Intent execution
7. Automation rules
8. Production security

## Planned integrations

- [Chainstack](https://www.chainstack.com/) — Monad Testnet RPC
- [Monad](https://monad.xyz/) — execution layer
- [Envio HyperIndex](https://envio.dev/) — indexed onchain analytics
- [Aurora Intents](https://aurora.dev/) — intent-based actions where supported
- [OpenAI API](https://platform.openai.com/docs/) — explainable financial analysis and natural-language actions

## Safety and UX rules

- Prefer fintech patterns over crypto trading-terminal patterns
- Keep gas, RPC, chain IDs, bridges, and contract addresses out of primary consumer flows
- Clearly label demo/testnet states
- Never imply a simulated transaction is a real transaction
- Treat this repository as a prototype until production security is in place

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Repository details

- Repository: [HelloAGit/FlowWallet](https://github.com/HelloAGit/FlowWallet)
- Description: Flow Wallet
- Primary language: TypeScript
- Secondary language: CSS
- License: [MIT](https://github.com/HelloAGit/FlowWallet/blob/main/LICENSE)

## Notes

The current UI runs in demo mode. The next step is to replace demo wallet behavior with Monad Testnet service-backed data while keeping credentials and keys server-side.
