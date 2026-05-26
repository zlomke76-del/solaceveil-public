const pillars = [
  {
    title: "Continuity Reconstruction",
    body: "Maintains visible context lineage so governed systems can distinguish stable continuity from fragmented or degraded state.",
  },
  {
    title: "Epistemic Arbitration",
    body: "Separates plausible output from admissible operational posture when uncertainty, contradiction, or missing evidence is present.",
  },
  {
    title: "Execution Boundary Preservation",
    body: "Keeps cognition, recommendation, review, and execution in separate lanes so downstream action does not inherit illegitimate confidence.",
  },
];

const surfaces = [
  "Governed cognition workspace",
  "Continuity and pressure indicators",
  "Operator-review framing",
  "Execution-boundary language",
  "Public architecture documentation",
  "Integration and demo references",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="eyebrow">SolaceVeil Public</div>
        <h1>Governed cognition runtime for continuity-aware AI systems.</h1>
        <p className="lede">
          SolaceVeil frames how AI systems preserve context, surface uncertainty, and keep execution boundaries visible when operating under changing state, authority, and consequence.
        </p>
        <div className="hero-actions">
          <a href="#architecture" className="button primary">View architecture</a>
          <a href="#boundary" className="button secondary">Public boundary</a>
        </div>
      </section>

      <section className="principle-card" aria-label="Core principle">
        <span>Core Principle</span>
        <p>Coherent cognition is not the same as admissible execution.</p>
      </section>

      <section id="architecture" className="section-grid">
        <div>
          <div className="eyebrow">Architecture</div>
          <h2>Designed to make cognitive state inspectable before action becomes consequence.</h2>
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
        <div>Input</div>
        <span>→</span>
        <div>Continuity</div>
        <span>→</span>
        <div>Governance</div>
        <span>→</span>
        <div>Review</div>
        <span>→</span>
        <div>Execution Boundary</div>
      </section>

      <section className="section-grid">
        <div>
          <div className="eyebrow">Public Surfaces</div>
          <h2>What this public release demonstrates.</h2>
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
          This repository is a public-facing website and documentation surface. It intentionally excludes production authentication, private memory infrastructure, operator consoles, telemetry pipelines, customer data, internal orchestration, and live execution services.
        </p>
      </section>
    </main>
  );
}
