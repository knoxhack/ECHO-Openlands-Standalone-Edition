# ECHO Openlands Standalone Edition

Openlands Standalone Edition is the packaging lane for the ECHO Standalone Runtime.

## Role

- Consumes `-standalone.jar` module artifacts from `ECHO-Modules`.
- Uses `echoopenlandsprotocol` as the canonical Openlands content source.
- Publishes Standalone install/update/rollback manifests for the ECHO Launcher.
- Proves Openlands can exist without depending on Minecraft or NeoForge.

## Status

Implementation foundation only. This repo must stay preview-only until the standalone runtime loads Openlands data, assets, worldgen, save/load, UI, and waystone state.

## Preview Payload

- `preview-artifacts/echoopenlandsprotocol-0.1.0-standalone.jar`
- `preview-artifacts/echoopenlandsprotocol-0.1.0-sources.jar`
- `manifests/modpack-index-entry.preview.json`

These files are checked in for repo visibility and handoff review only. They are not approved player-facing release artifacts.
