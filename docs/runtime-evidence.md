# Runtime Evidence

Openlands Standalone Edition must treat `echoopenlandsprotocol` as the source of truth and report evidence from the shared load plan:

`data/echoopenlandsprotocol/openlands/systems/runtime_adapter_load_plan.json`

The concrete evidence output shape starts from `evidence/runtime-evidence.template.json`.
Harness driver availability must follow `data/echoopenlandsprotocol/openlands/systems/harness_driver_manifest_contract.json`; this edition's current manifest template is `evidence/standalone-harness-driver-manifest.template.json`. The `run-*harness.mjs` scripts auto-load that template, record every missing driver surface, and keep reports blocked until real driver entrypoints, method coverage, captures, evidence roots, driver versions, and adapter commits exist.
Launcher install, update, repair, and rollback evidence must follow `data/echoopenlandsprotocol/openlands/systems/launcher_flow_acceptance.json`.
Shared first-hour runtime-core evidence must follow `data/echoopenlandsprotocol/openlands/systems/playable_runtime_contract.json`.
Real adapter execution evidence must follow `data/echoopenlandsprotocol/openlands/systems/runtime_execution_acceptance.json` and eventually produce `evidence/standalone-runtime-execution-report.json`.
The Standalone real-runtime harness must follow `data/echoopenlandsprotocol/openlands/systems/runtime_execution_harness_plan.json` for driver surfaces, scenario actions, assertions, captures, and saved artifacts.
Real launcher execution evidence must follow `data/echoopenlandsprotocol/openlands/systems/launcher_execution_acceptance.json` and eventually produce `evidence/standalone-launcher-execution-report.json`.
The Standalone launcher harness must follow `data/echoopenlandsprotocol/openlands/systems/launcher_execution_harness_plan.json` for install/update/repair/rollback driver surfaces, preconditions, actions, assertions, world-state policies, and saved artifacts.
Final release review evidence must follow `data/echoopenlandsprotocol/openlands/systems/final_release_review_acceptance.json` and eventually produce `evidence/standalone-final-release-review-report.json`.
Distribution approval evidence must follow `data/echoopenlandsprotocol/openlands/systems/distribution_approval_acceptance.json` and eventually produce `evidence/standalone-distribution-approval-report.json`.

Validate the real runtime execution report from this edition root:

```bash
node scripts/validate-runtime-execution-report.mjs
```

Generate the current honest blocked runtime execution report from this edition root:

```bash
node scripts/generate-runtime-execution-report.mjs
```

Before the real Standalone adapter execution exists, the report must remain `blocked`, clear zero runtime gates, keep all runtime gates in `remainingRuntimeGates`, and keep `publicAlphaReady: false`.
`scripts/run-runtime-execution-harness.mjs` currently validates the harness plan and produces the same blocked report path with a `harnessRun` block that records missing driver surfaces. It must not produce passing scenario records until real Standalone runtime drivers exist.

Validate the real launcher execution report from this edition root:

```bash
node scripts/validate-launcher-execution-report.mjs
```

Generate the current honest blocked launcher execution report from this edition root:

```bash
node scripts/generate-launcher-execution-report.mjs
```

Before the real Standalone launcher execution exists, the report must remain `blocked`, clear zero launcher gates, keep all launcher gates in `remainingLauncherGates`, and keep `publicAlphaReady: false`.
`scripts/run-launcher-execution-harness.mjs` currently validates the harness plan and produces the same blocked report path with a `harnessRun` block that records missing driver surfaces. It must not produce passing flow records until real Standalone launcher drivers exist.

Validate the final release review report from this edition root:

```bash
node scripts/validate-final-release-review-report.mjs
```

Generate the current honest blocked final release review report from this edition root:

```bash
node scripts/generate-final-release-review-report.mjs
```

Before final Standalone art/audio/legal signoff exists, the report must remain `blocked`, clear zero final review gates, keep all final review gates in `remainingFinalReviewGates`, and keep `publicReleaseReady: false`.
`scripts/run-final-release-review-harness.mjs` currently follows `systems/final_release_review_harness_plan.json` and produces the same blocked report path with a `harnessRun` block that records missing driver surfaces. It must not produce passing public identity, asset, audio, generated-output, capture, or saved-artifact records until real Standalone review drivers exist.

Validate the distribution approval report from this edition root:

```bash
node scripts/validate-distribution-approval-report.mjs
```

Generate the current honest blocked distribution approval report from this edition root:

```bash
node scripts/generate-distribution-approval-report.mjs
```

Before Standalone public artifact URLs, hash verification, indexed manifests, co-op session evidence, and approval signoff exist, the report must remain `blocked`, clear zero distribution gates, keep all distribution gates in `remainingDistributionGates`, and keep `publicAlphaReady: false`.
`scripts/run-distribution-approval-harness.mjs` currently follows `systems/distribution_approval_harness_plan.json` and produces the same blocked report path with a `harnessRun` block that records missing driver surfaces. It must not produce passing Release Index, artifact download, manifest indexing, dependency, co-op, roadmap, rollback, approval signature, capture, or saved-artifact records until real Standalone approval drivers exist.

Generate or refresh the adapter-boot preflight report from this edition root:

```bash
node scripts/generate-adapter-boot-report.mjs
```

Generate or refresh the registry-parity preflight report from this edition root:

```bash
node scripts/generate-registry-parity-report.mjs
```

Generate or refresh the crafting-station preflight report from this edition root:

```bash
node scripts/generate-crafting-station-report.mjs
```

Generate or refresh the worldgen/exploration preflight report from this edition root:

```bash
node scripts/generate-worldgen-exploration-report.mjs
```

Generate or refresh the creature-roster preflight report from this edition root:

```bash
node scripts/generate-creature-roster-report.mjs
```

Generate or refresh the old-road network preflight report from this edition root:

```bash
node scripts/generate-old-road-network-report.mjs
```

Generate or refresh the alpha-systems preflight report from this edition root:

```bash
node scripts/generate-alpha-systems-report.mjs
```

Generate or refresh the distribution/roadmap preflight report from this edition root:

```bash
node scripts/generate-distribution-roadmap-report.mjs
```

Generate or refresh the runtime-core report from this edition root:

```bash
node scripts/generate-runtime-core-report.mjs
```

Generate or refresh the first-hour playtest preflight report from this edition root:

```bash
node scripts/generate-first-hour-playtest-report.mjs
```

Generate or refresh the waystone save/load preflight report from this edition root:

```bash
node scripts/generate-waystone-save-load-report.mjs
```

Generate or refresh the launcher-flow preflight report from this edition root:

```bash
node scripts/generate-launcher-flow-report.mjs
```

The launcher-flow preflight checks compiled artifact metadata, descriptors, checksums, and install/update/repair/rollback mapping. It does not replace the real launcher execution report before Public Alpha.

Generate or refresh the legal/content preflight report from this edition root:

```bash
node scripts/generate-legal-audit-report.mjs
```

The legal/content preflight scans public Openlands identity, canonical IDs, recipe/station identity, asset paths, generated artifact paths, and placeholder policy. It does not replace final human art/legal review before Public Alpha.

The adapter-boot preflight checks descriptor identity, runtime target acceptance, adapter phase order, load-step resources, runtime evidence IDs, ready signal declaration, and compiled artifact coverage. It does not replace real Standalone adapter boot execution before Public Alpha.

The registry-parity preflight checks MVP block, item, recipe, biome, structure, creature, and waystone counts against the conformance fixture; it also checks Standard-mode rules, first-hour save/load fields, waystone state-machine parity, and compiled artifact registry contents. It does not replace real Standalone registry registration and parity execution before Public Alpha.

The crafting-station preflight checks handcrafting, workbench, kiln, forge, cookpot, map table, exact recipe counts, process timing, map-table route recipes, freeform crafting identity, deferred loom/mason-table blocks, unlock hooks, and compiled artifact recipe contents. It does not replace real Standalone station UI, crafting, process, and save/load execution before Public Alpha.

The worldgen/exploration preflight checks Meadows, Woodlands, Stonehills, Marshlands, starter spawn safety, landmark pools, creature spawn/sound coverage, HoloMap layers and hint types, semantic cave/road/reed markers, worldgen load-step evidence, and compiled artifact worldgen contents. It does not replace real Standalone biome generation, landmark placement, creature spawning, HoloMap reveal, or seed-sweep execution before Public Alpha.

The creature-roster preflight checks all ten MVP creatures, spawn rules, biome spawn-table entries, drop tables, sound keys, AI hints, moderate default hostility, safe-start distances, and compiled artifact creature contents. It does not replace real Standalone creature spawn, AI, drop, or sound execution before Public Alpha.

The old-road network preflight checks old-road blocks, road markers, broken/restored waystones, route records, map-table route recipes, HoloMap oldRoadSegments, linked route ids, public travel permissions, and compiled artifact route contents. It does not replace real Standalone old-road generation, segment walking, route binding, HoloMap reveal, or travel-link execution before Public Alpha.

The alpha-systems preflight checks relaxed homestead rules, crops, cookpot meals, animal pens, trader surplus, builder hammer/scaffold UX, quick stack, quick deposit, inventory sorting, craft-from-storage, named chests, co-op permissions, storage transaction events, and compiled artifact alpha-system contents. It does not replace real Standalone homestead, builder UX, and co-op runtime execution before Public Alpha.

The distribution/roadmap preflight checks distribution alpha gates, launch roadmap phases, local compiled artifact SHA-256/size metadata, Release Index warning state, edition matrix alignment, Public Alpha MVP floors, launcher-flow mapping, and final roadmap invariants. It does not replace uploaded Release Index URLs, real Standalone launcher execution, real Native/Standalone/NeoForge runtime parity execution, co-op session testing, or release approval before Public Alpha.

The distribution approval blocked report checks artifact publication, Release Index URL/hash evidence, edition manifest indexing, release dependency gates, co-op public-alpha session evidence, saved approval artifacts, and final approval status. It does not replace actual Standalone artifact upload, co-op playtest execution, or release approval before Public Alpha.

The first-hour and waystone preflights validate fixture alignment and compiled artifact contents. They do not replace real Standalone runtime playtest and save/load execution before Public Alpha.

## Required Boot Phases

1. `discover`: load `META-INF/echo.mod.json`, verify `echoopenlandsprotocol`, version `0.1.0`, official pack root status, and `echo_runtime_standalone`.
2. `load_data`: parse common Echo JSON, production phase matrix, and runtime execution acceptance without Minecraft classes or Minecraft resource identifiers.
3. `register_content`: register standalone block, item, recipe, tag, loot, and station handles from Echo IDs.
4. `bind_worldgen`: bind standalone terrain palettes, structures, creature spawns, ambience, and starter guarantees.
5. `bind_gameplay_state`: bind inventory, crafting, building, map, shelter, waystones, HoloMap, co-op permissions, homestead, builder UX, and sounds.
6. `ready`: report `openlands_runtime_ready` after standalone first-frame smoke tests and Standard-mode relaxed checks.
7. `release_gate`: promote only after artifacts, launcher flows, parity, playtest, waystone reload, legal audit, final review, and distribution approval evidence pass.

The Standalone adapter must call `OpenlandsFirstHourRuntime` for relaxed Standard rules, starter spawn validation, shelter scoring, waystone transitions, homestead crop/cookpot behavior, builder/storage action validation, first-hour route order, and adapter readiness metadata.

## Public Alpha Evidence

- `openlands_contract_validator_pass`
- `native_standalone_neoforge_artifacts_uploaded_with_sha256`
- `launcher_install_update_repair_rollback_pass`
- `first_hour_runtime_playtest_pass`
- `waystone_state_save_load_pass`
- `legal_content_audit_pass`

## Standalone-Specific Checks

- No standalone registry, save, UI, worldgen, or asset code depends on Minecraft classes.
- Standalone playtest automation consumes `playtests/mvp_first_hour_acceptance.json` without Minecraft classes or Minecraft resource identifiers.
- Standalone handles map directly to Echo IDs for blocks, items, recipes, biomes, creatures, waystones, structures, tags, loot, and sounds.
- First-hour playtest reaches spawn, gather, craft, shelter, sleep, explore, waystone repair, map reveal, save, and reload.
- Save/load preserves inventory, hotbar, placed blocks, chest contents, bedroll spawn, campfire state, shelter score, waystone state, HoloMap discovery, and multiplayer permissions.
