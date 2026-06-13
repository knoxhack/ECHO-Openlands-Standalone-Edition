# ECHO Openlands Standalone Edition

Openlands Standalone Edition is the packaging lane for the ECHO Standalone Runtime.

## Role

- Consumes `-standalone.jar` module artifacts from `ECHO-Modules`.
- Uses `echoopenlandsprotocol` as the canonical Openlands content source.
- Publishes Standalone install/update/rollback manifests for the ECHO Launcher.
- Proves Openlands can exist without depending on Minecraft or NeoForge.

## Status

Implementation foundation only. This repo must stay preview-only until the standalone runtime loads Openlands data, assets, worldgen, save/load, UI, and waystone state.

