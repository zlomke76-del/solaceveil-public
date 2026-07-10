# SolaceVeil Public

**Runtime governance infrastructure for continuity-aware, consequence-bearing AI systems.**

SolaceVeil is a constitutional runtime architecture for evaluating whether a proposed AI-supported action remains legitimate under the conditions that exist **now**, before cognition becomes operational consequence.

SolaceVeil is not a chatbot.
SolaceVeil is not a model benchmark.
SolaceVeil is not an unrestricted autonomous execution system.

SolaceVeil is a governed runtime layer for preserving continuity, evidence, authority, admissibility, and operator oversight as AI systems participate in real-world workflows.

---

## Core Principle

```text
Coherent cognition is not the same as admissible execution.
```

An AI system may remain internally coherent while the world around it changes.

Authority may expire.
Evidence may degrade.
Patient state may change.
Facts may become stale.
Policy may shift.
Operational context may fragment.
Dependencies may drift.
Execution may become inappropriate even when the original recommendation was reasonable.

SolaceVeil exists to govern that transition.

---

## The Central Question

As AI systems move closer to consequence, the central governance question changes from:

```text
Can the model reason?
```

to:

```text
Should this specific execution still be permitted under the current conditions?
```

SolaceVeil is designed to evaluate that question before consequence binds.

---

## Runtime Execution Governance

SolaceVeil introduces a distinct governance layer between cognition and consequence.

This layer evaluates whether an output, recommendation, instruction, or proposed action remains admissible based on:

* current reality
* available evidence
* delegated authority
* operational context
* identity and access state
* continuity conditions
* policy constraints
* consequence class
* revocation state
* operator review requirements

This is different from model evaluation, post-hoc explainability, static compliance review, and ordinary access control.

Those layers matter, but they do not fully answer whether a specific action remains admissible at the moment it is about to affect the world.

---

## Pre-Bind Cognition

SolaceVeil uses the concept of **Pre-Bind Cognition**.

Pre-Bind Cognition is the runtime process of evaluating:

* authority
* admissibility
* evidence sufficiency
* state validity
* continuity integrity
* consequence legitimacy

before a system is permitted to bind cognition to reality through action, record creation, communication, workflow execution, or downstream operational effect.

---

## Governance Distinctions

SolaceVeil is built around several distinctions:

* cognition is not authority
* recommendation is not execution
* verification is not admissibility
* access is not legitimacy
* memory is not current reality
* capability is not permission
* observability is not governance
* coherence is not truth
* worker output is not admitted fact
* code generation is not deployable infrastructure

The runtime exists to govern transitions between these states.

---

## Public Architecture Areas

### Reality Contact

Determines whether the system remains synchronized with observable operational reality.

### Evidence Sufficiency

Evaluates whether the evidence supporting a proposed action remains current, traceable, and adequate.

### Authority Continuity

Checks whether the authority permitting a proposed action still exists and remains within scope.

### Admissibility Evaluation

Determines whether an action may proceed under current evidence, authority, policy, continuity, and consequence conditions.

### Continuity Reconstruction

Preserves and reconstructs context across sessions, interruptions, evolving facts, and contested state.

### Epistemic Arbitration

Maintains competing interpretations, uncertainty, contradiction, and incomplete information without premature collapse.

### Operator Review

Surfaces review packets, escalation conditions, approvals, deferrals, and rejection pathways for human oversight.

### Execution Boundary Preservation

Maintains explicit separation between cognition, candidate work, and consequence-bearing execution.

### Governance Lineage

Preserves traceability across decisions, evidence, authority, review, and runtime state transitions.

---

## Constitutional Runtime Pattern

SolaceVeil follows a constitutional runtime pattern:

```text
Observe
  ↓
Gather Evidence
  ↓
Recover Context
  ↓
Resolve Authority
  ↓
Evaluate Admissibility
  ↓
Route to Worker / Operator Review
  ↓
Verify Outcome
  ↓
Preserve Lineage
```

The purpose is not to make AI systems slower.

The purpose is to make consequential AI systems more defensible, inspectable, and recoverable.

---

## Constitutional Workforce Pattern

SolaceVeil supports a bounded workforce pattern in which specialized workers can assist with analysis, research, verification, architecture, documentation, and candidate implementation.

Workers may produce candidate outputs.

Workers do not independently admit those outputs as truth.

Workers do not expand their own authority.

Workers do not bypass operator review.

The invariant is:

```text
Workers may create.
Runtime evaluates.
Operators admit.
```

---

## Software Stewardship

The private SolaceVeil runtime includes software stewardship concepts for repository inspection, verification, mission discovery, release readiness, and operator-reviewed engineering workflows.

The public repository does not contain private orchestration, credentials, customer data, production telemetry, or internal execution infrastructure.

Public materials may describe the architecture and governance model, but production implementation details remain private.

---

## Public / Private Boundary

This public repository is intended to communicate:

* public architecture principles
* conceptual documentation
* educational examples
* public-facing governance materials
* external review materials
* website content
* high-level runtime patterns

It does not include:

* production authentication systems
* private memory infrastructure
* customer data
* operator consoles
* internal orchestration services
* telemetry pipelines
* private runtime infrastructure
* live execution environments
* proprietary governance implementations
* secrets, tokens, or deployment credentials

The public repository is a communication surface, not the production system.

---

## Independent Review

In May 2026, an independent external review examined SolaceVeil's runtime architecture against selected operational obligations and governance structures within the EU AI Act.

Key observations included:

* runtime legitimacy evaluation at execution time
* continuous revalidation under changing state
* human oversight and intervention pathways
* risk management decomposition into observable runtime pressures
* multi-deployer coherence as a future governance challenge

Reviewer observation:

> "The runtime layer answers 'is execution still legitimate at the exact moment consequence binds?'"

The review further identified multi-deployer coherence as a load-bearing governance challenge where independently compliant participants may drift into divergent operational realities despite maintaining local correctness.

Review document:

```text
/docs/external-review/veil-eu-ai-act-runtime-mapping-shucrani-2026-05-13.pdf
```

This review represents an independent observation and does not constitute legal advice, regulatory certification, conformity assessment, or regulatory approval.

---

## Example Domains

SolaceVeil is designed for AI systems operating near consequence, including:

* clinical AI
* legal AI
* financial workflows
* regulated operations
* enterprise automation
* autonomous agents
* critical infrastructure
* institutional knowledge systems
* governed software engineering workflows

The same core question applies across domains:

```text
Is this specific execution still admissible under current conditions?
```

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

See:

```text
SECURITY.md
```

---

## Contributing

Public contributions are welcome for:

* documentation
* examples
* developer experience improvements
* architecture clarification
* public educational resources

See:

```text
CONTRIBUTING.md
```

---

## License

Licensed under the Apache License, Version 2.0.

See:

```text
LICENSE
```

---

## Current Direction

SolaceVeil is evolving toward a public architecture for governed runtime execution, continuity preservation, operator review, and consequence-aware AI infrastructure.

The objective is not unrestricted autonomy.

The objective is legitimacy-preserving cognition under changing reality.
