# FlowWallet coding instructions

## Product
Build a consumer-first financial experience on Monad. The user should not need to understand blockchain mechanics.

## UX
- Prefer fintech patterns over crypto trading-terminal patterns.
- Keep gas, RPC, chain IDs, bridges and contract addresses out of primary consumer flows.
- Clearly label demo/testnet states.
- Never imply a simulated transaction is a real transaction.

## Architecture
- Keep blockchain access behind service/adaptor modules.
- Keep Chainstack RPC credentials server-side.
- Keep Envio behind an analytics adapter.
- Keep Aurora Intents behind an intent adapter.
- Keep OpenAI API keys server-side.
- Do not add private keys or seed phrases to source code.

## Development sequence
1. UI
2. Demo services
3. Monad Testnet read operations
4. Wallet/account integration
5. Envio indexing
6. Intent execution
7. Automation rules
8. Production security

## Quality
Run the build after meaningful changes. Prefer small, reviewable changes.
