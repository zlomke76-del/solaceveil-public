# SolaceVeil Public Architecture

SolaceVeil is presented publicly as a governed cognition and execution-boundary architecture for AI systems operating near real-world consequence.

Its central separation is simple:

> **Models propose. Governance decides. Truth survives.**

The model may reason, summarize, retrieve, compare, or propose. That activity does not itself create authority to act.

## Public runtime pattern

```text
Reality / Evidence
       ↓
Continuity + Context
       ↓
Structured Reasoning
       ↓
Candidate Action
       ↓
Harmonic Governance Boundary
       ↓
PERMIT / DENY / HOLD
       ↓
Bound Execution or Operator Review
       ↓
Lineage + Verification
```

The public architecture distinguishes cognition from consequence. A useful or coherent model response can still be inadmissible for execution if evidence, authority, policy, identity, or operational state has changed.

## Evidence and authority are separate

SolaceVeil treats these as different questions:

- **What evidence is available?**
- **What does that evidence establish?**
- **Who has authority to bind an action?**
- **Does that authority still stand under current conditions?**
- **May this exact consequence proceed now?**

Repository access, connector access, model capability, memory, prior approval, or narrative continuity do not automatically answer the authority question.

## Structured cognition

The private runtime can represent reasoning as structured packets rather than only final prose. Publicly, the relevant concepts are:

- claims;
- hypotheses;
- assumptions;
- evidence;
- uncertainty;
- candidate next actions;
- ordered reasoning transitions;
- confidence changes;
- review and escalation conditions.

These structures improve inspectability. They do not themselves create execution authority.

## Deterministic review before escalation

SolaceVeil uses deterministic review stages to identify missing evidence, attribution gaps, contradictions, and unresolved reasoning before additional model or retrieval work is justified.

This supports a bounded principle:

```text
More model calls are not automatically more governance.
```

Additional cognition should be justified by a material gap, not by default repetition.

## Constitutional and runtime invariants

The runtime maintains explicit laws and invariants that can report healthy, degraded, or review-required states. Public architecture assumes these controls are machine-checkable and self-reconciling rather than dependent on hard-coded counts or narrative interpretation.

## Human authority and operator review

Operator review is a distinct state, not a synonym for model confidence. A review queue should represent concrete findings and decisions, not synthetic urgency created by standing maintenance duties.

Where a decision must be durable, the system should preserve stable identity, evidence fingerprint, review outcome, authority state, and audit lineage.

## Repository authority

The private `zlomke76-del/Veil` repository is the canonical source for production runtime behavior. This public repository is a documentation and communication surface.

See:

- `docs/REPOSITORY_AUTHORITY.json`
- `docs/PUBLIC_SYNC_POLICY.md`

## Public boundary

This public repository does **not** contain production memory systems, customer data, production authentication, operator controls, private telemetry, internal orchestration, proprietary governance implementation, or live execution infrastructure.

The purpose of the public repository is to make the architecture reviewable without publishing the private production system.
