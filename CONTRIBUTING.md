# Contributing

Thank you for your interest in contributing to SolaceVeil Public.

Public contributions are welcome for:

- documentation
- public examples
- developer tooling
- accessibility improvements
- clarity and usability improvements

Please keep pull requests focused and avoid adding production authentication, private infrastructure, internal telemetry, customer data, or operational orchestration logic to this public repository.

## Public/private synchronization

Changes that claim to mirror private-runtime behavior must identify the public contract or architecture statement being synchronized. Do not copy private implementation by default.

Repository-role and synchronization rules are defined in:

- `docs/REPOSITORY_AUTHORITY.json`
- `docs/PUBLIC_SYNC_POLICY.md`
