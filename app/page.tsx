const pillars = [
  {
    title: "Evidence Before Authority",
    body: "Separates what is observed from what that evidence establishes, and separates both from who is authorized to bind a consequence.",
  },
  {
    title: "Structured Reasoning",
    body: "Keeps claims, assumptions, evidence, uncertainty, and reasoning transitions inspectable without treating model coherence as execution authority.",
  },
  {
    title: "Execution Boundary Preservation",
    body: "Keeps cognition, recommendation, governance determination, operator review, and consequence in distinct lanes.",
  },
];

const surfaces = [
  "Public architecture and execution-boundary documentation",
  "Continuity, evidence, and authority concepts",
  "Structured reasoning and bounded-escalation patterns",
  "Operator-review and durable-decision principles",
  "Repository authority and public/private synchronization policy",
  "Approved external review material",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="eyebrow">SolaceVeil Public</div>
        <h1>Governed cognition before consequence.</h1>
        <p className="lede">
          SolaceVeil separates model reasoning from authority to act. It preserves evidence, continuity, review, and execution boundaries as AI systems operate under changing real-world conditions.
        </p>
        <div className="hero-actions">
          <a href="#architecture" className="button primary">View architecture</a>
          <a href="#boundary" className="button secondary">Public boundary</a>
        </div>
      </section>

      <section className="principle-card" aria-label="Core principle">
        <span>Core Principle</span>
        <p>Models propose. Governance decides. Truth survives.</p>
      </section>

      <section id="architecture" className="section-grid">
        <div>
          <div className="eyebrow">Architecture</div>
          <h2>Reasoning can be useful without being authorized to bind reality.</h2>
        </div>
        <div className="cards">
          {pillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="runtime-strip" aria-label="Runtime flow">
        <div>Reality + Evidence</div>
        <span>→</span>
        <div>Structured Cognition</div>
        <span>→</span>
        <div>Candidate Action</div>
        <span>→</span>
        <div>Harmonic</div>
        <span>→</span>
        <div>Bound Consequence</div>
      </section>

      <section className="section-grid">
        <div>
          <div className="eyebrow">Public Surfaces</div>
          <h2>What this repository is intended to make reviewable.</h2>
        </div>
        <ul className="surface-list">
          {surfaces.map((surface) => (
            <li key={surface}>{surface}</li>
          ))}
        </ul>
      </section>

      <section id="boundary" className="boundary">
        <div className="eyebrow">Repository Boundary</div>
        <h2>Public explanation, not private operations.</h2>
        <p>
          The private Veil repository is canonical for runtime behavior. This repository intentionally excludes production authentication, private memory infrastructure, operator consoles, telemetry pipelines, customer data, internal orchestration, proprietary governance implementation, and live execution services.
        </p>
      </section>
    </main>
  );
}
