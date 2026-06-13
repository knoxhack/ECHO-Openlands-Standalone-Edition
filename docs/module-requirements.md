# Module Requirements

Openlands Standalone Edition consumes `-standalone.jar` artifacts.

## Required

- `echocore`
- `echonetcore`
- `echoadaptercore`
- `echocontentcore`
- `echoworldcore`
- `echorecipecore`
- `echobiomecore`
- `echostructurecore`
- `echocreaturecore`
- `echofoundationcore`
- `echomaterialcore`
- `echotoolcore`
- `echostationcore`
- `echoworldstarter`
- `echocommonloot`
- `echocreatureroles`
- `echoprogressioncore`
- `echoassetcore`
- `echoopenlandsprotocol`

## Required Standalone Guarantees

- Registries load without Minecraft classes.
- Save/load preserves first-hour state.
- Worldgen exposes the same starter guarantees.
- Input/UI supports inventory, crafting, building, map, and waystone interactions.

## Runtime Evidence

Standalone builds must consume `data/echoopenlandsprotocol/openlands/systems/runtime_adapter_load_plan.json` and report every required adapter phase: `discover`, `load_data`, `register_content`, `bind_worldgen`, `bind_gameplay_state`, `ready`, and `release_gate`.

Standalone evidence must prove the block, item, worldgen, inventory, shelter, waystone, HoloMap, and co-op surfaces work without Minecraft classes while preserving the same Echo schema keys as Native and NeoForge.

Standalone driver-surface implementation status must follow `data/echoopenlandsprotocol/openlands/systems/harness_driver_manifest_contract.json`; the current template lives at `evidence/standalone-harness-driver-manifest.template.json` and intentionally lists every real harness driver as missing.

The detailed evidence checklist lives in `docs/runtime-evidence.md`.
