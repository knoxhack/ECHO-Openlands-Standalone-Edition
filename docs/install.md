# Install

Standalone install uses ECHO Launcher and the Standalone Runtime.

## Expected Flow

1. Launcher resolves `openlands-standalone-edition`.
2. Launcher installs or verifies `ECHO-Standalone-Runtime`.
3. Launcher downloads `-standalone.jar` module artifacts.
4. Launcher verifies SHA-256 checksums.
5. Launcher starts Standalone Runtime with Openlands as the selected pack.

## Required Before Public Install

- `echoopenlandsprotocol-0.1.0-standalone.jar` exists.
- Standalone Runtime can load the Openlands descriptor and registries.
- Asset placeholders are replaced or clearly excluded from public release.
- Save/load acceptance passes for first-hour data.

