# Troubleshooting

## Runtime Opens But Pack Is Missing

- Confirm `openlands-standalone-edition` is in the launcher channel.
- Confirm `echoopenlandsprotocol-0.1.0-standalone.jar` is installed.
- Confirm Standalone Runtime scans module descriptors.

## World Loads With Missing Content

- Verify registry files are packaged under `data/echoopenlandsprotocol/openlands`.
- Verify assets are packaged under `assets/echoopenlandsprotocol`.
- Verify adapter code normalizes namespaced and local Echo IDs consistently.

