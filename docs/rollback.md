# Rollback

Rollback restores the previous Standalone manifest and module jars.

## Required Behavior

- Restore previous `-standalone.jar` files.
- Keep player worlds untouched.
- Re-read the previous config overlay.
- Warn when a world was saved with a newer schema.

## Extra Standalone Concern

Standalone owns the whole runtime surface, so rollback must include runtime compatibility checks, not just module checks.

