# Update Flow

Standalone updates must preserve player worlds while replacing runtime modules by checksum.

## Policy

- Download only changed `-standalone.jar` modules.
- Preserve worlds, configs, screenshots, local HoloMap markers, and player settings.
- Run schema migration before opening an older world with newer waystone or HoloMap data.
- Keep `openlands_standard` as the default after update.

