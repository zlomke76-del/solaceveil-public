# SolaceVeil Public

Governed cognition runtime for continuity-aware AI systems.

SolaceVeil is a runtime governance architecture designed to evaluate whether execution remains legitimate under current conditions before consequence is permitted to form.

As AI systems increasingly participate in real-world workflows, decisions, recommendations, and autonomous actions, the challenge is no longer simply whether a system can reason.

The challenge becomes:

**Should execution still be permitted under the conditions that currently exist?**

SolaceVeil exists to evaluate that question.

---

## Core Principle

```text
Coherent cognition is not the same as admissible execution.
```

A system may remain internally coherent while:

* Authority changes
* State changes
* Evidence degrades
* Context fragments
* Operational conditions evolve
* Consequence continues propagating

Coherence alone does not establish legitimacy.

---

## Why SolaceVeil Exists

Modern AI systems do not operate against static conditions.

Patient conditions change.

Authorities change.

Permissions expire.

Dependencies drift.

Information becomes stale.

Operational reality evolves.

Yet many systems continue executing as though the conditions that originally justified execution remain unchanged.

SolaceVeil is designed around the premise that advanced AI systems require visible runtime cognition boundaries before outputs become operational consequence.

The objective is not simply to determine whether a recommendation is correct.

The objective is to determine whether execution remains admissible at the moment consequence is about to form.

---

## Runtime Questions

SolaceVeil is designed to evaluate questions such as:

* Does the authority permitting execution still exist?
* Does the evidentiary state remain sufficient?
* Has operational context materially changed?
* Does consequence remain admissible under current conditions?
* Does continuity remain intact?
* Should execution continue, pause, escalate, review, or stop?

These evaluations occur before consequence is permitted to bind reality.

---

## Pre-Bind Cognition

Pre-Bind Cognition is the process by which a system evaluates:

* Authority
* Admissibility
* Evidentiary sufficiency
* State validity
* Consequence legitimacy

before execution is permitted to bind cognition to reality.

SolaceVeil operationalizes this process as a runtime governance layer between cognition and consequence.

---

## Public Architecture Areas

### Continuity Reconstruction

Preserving and recovering continuity across fragmented, interrupted, or evolving state environments.

### Epistemic Arbitration

Managing competing interpretations, uncertainty, contradiction, and incomplete information.

### Cognitive Pressure Visibility

Making runtime pressures observable before they silently influence execution.

### Operator Review Framing

Supporting human review, intervention, escalation, override, and accountability.

### Execution Boundary Preservation

Maintaining explicit separation between cognition and consequence formation.

### Governance Lineage

Providing traceability, continuity, reconstruction, and governance visibility across execution pathways.

---

## Independent Review

In May 2026, an independent external review examined SolaceVeil's runtime architecture against selected operational obligations and governance structures within the EU AI Act.

Key observations included:

* Runtime legitimacy evaluation at execution time
* Continuous revalidation under changing state
* Human oversight and intervention pathways
* Risk management decomposition into multiple observable runtime pressures
* Multi-deployer coherence as a future governance challenge

Reviewer observation:

> "The runtime layer answers 'is execution still legitimate at the exact moment consequence binds?'"

The review further identified multi-deployer coherence as a load-bearing governance challenge where independently compliant participants may drift into divergent operational realities despite maintaining local correctness.

Review document:

`/docs/external-review/veil-eu-ai-act-runtime-mapping-shucrani-2026-05-13.pdf`

This review represents an independent observation and does not constitute legal advice, regulatory certification, or conformity assessment.

---

## Repository Scope

This repository contains the public-facing SolaceVeil website, documentation, examples, and public architecture materials.

It is designed for public visibility and does not include:

* Production authentication systems
* Private memory infrastructure
* Customer data
* Operator consoles
* Internal orchestration services
* Telemetry pipelines
* Runtime infrastructure
* Live execution environments
* Proprietary governance implementations

The public repository exists to communicate architecture, principles, governance concepts, and public-facing documentation.

---

## Development

```bash
npm install
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Deployment

Deploy as a standard Next.js application on Vercel or compatible Node.js infrastructure.

```bash
vercel deploy
```

---

## Security

Please report security concerns privately.

See `SECURITY.md`.

---

## Contributing

Public contributions are welcome for:

* Documentation
* Examples
* Developer experience improvements
* Architecture clarification
* Public educational resources

See `CONTRIBUTING.md`.

---

## License

Licensed under the Apache License, Version 2.0.

See `LICENSE` for details.
