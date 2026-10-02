# FlowWallet

A Monad-branded consumer-finance prototype: a programmable personal finance experience powered by Monad.

## Current scope

- Consumer fintech dashboard
- Demo balances and activity
- Cash-flow visualization
- Spending analytics
- Financial-health indicator
- Smart savings insight
- Monad Testnet connection architecture
- Demo mode so no real funds are required

## Planned integrations

1. Chainstack — Monad Testnet RPC
2. Monad — execution layer
3. Envio HyperIndex — indexed onchain analytics
4. Aurora Intents — intent-based actions where supported
5. Smart-account / account-abstraction provider — gas-sponsored UX
6. OpenAI API — explainable financial analysis and natural-language actions

## Safety

This repository is a prototype. Do not use real private keys, seed phrases, or production funds during development.

Keep Chainstack credentials and API keys in environment variables. Never commit `.env.local`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The current UI runs in demo mode. The next implementation step is to replace the demo wallet service with a Monad Testnet service using the Chainstack RPC URL.
