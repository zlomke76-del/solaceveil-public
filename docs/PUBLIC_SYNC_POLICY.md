# Public / Private Repository Synchronization Policy

## Purpose

This repository is the public documentation and communication surface for SolaceVeil. It is **not** the production runtime and is not an alternate source of execution authority.

The private `zlomke76-del/Veil` repository is the canonical runtime source. The public `zlomke76-del/solaceveil-public` repository may mirror only material explicitly classified for public release.

## Canonical roles

| Repository | Role | Canonical for runtime behavior? |
| --- | --- | --- |
| `zlomke76-del/Veil` | Private production/runtime authority | Yes |
| `zlomke76-del/solaceveil-public` | Public documentation, examples, and review surface | No |

The machine-readable form of this policy is maintained in `docs/REPOSITORY_AUTHORITY.json`.

## Permitted synchronization scope

Public synchronization may include:

- architecture concepts and diagrams;
- public execution-boundary descriptions;
- public release notes and compatibility statements;
- public examples and educational material;
- approved external-review material;
- public interfaces intentionally designated for external use.

## Restricted synchronization scope

The following classes must remain private unless they are separately reviewed and explicitly released:

- secrets, tokens, credentials, or environment values;
- customer, operator, or institution data;
- production authentication or authorization internals;
- private memory and continuity stores;
- operator consoles or internal administrative surfaces;
- production telemetry and incident detail;
- internal orchestration and private execution infrastructure;
- proprietary governance implementation details;
- internal security controls whose disclosure would weaken the system.

## Release discipline

A public update should state the private-runtime baseline it was reviewed against, but it must not imply source parity. The public repository may intentionally omit implementation details even when its architecture description is current.

A synchronization difference is not automatically a defect. It becomes a defect only when material designated for public synchronization no longer matches the canonical runtime contract or approved public architecture.

## Current baseline

This public repository was reviewed against private SolaceVeil runtime **v0.204.8** on **2026-09-24**.

That baseline establishes public-documentation alignment only. Production deployment status, runtime health, operator authority, or release certification must be established from their own authoritative evidence sources.
