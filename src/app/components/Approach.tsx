const approaches = [
  {
    number: "01",
    title: "Understand",
    description: "What problem are we solving?",
  },
  {
    number: "02",
    title: "Break down",
    description: "Pages, components, states and data.",
  },
  {
    number: "03",
    title: "Build",
    description: "Small, reusable pieces with clear structure.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Responsive, accessible and tested.",
  },
  {
    number: "05",
    title: "Ship",
    description: "Git, review, deployment and feedback.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 border-t border-(--border) py-4 md:py-8"
    >
      <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
        My approach
      </p>

      <h2 className="mt-2 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
        Thoughtful work, from first idea to final detail.
      </h2>

      <div className="mt-4 grid gap-5 md:grid-cols-5">
        {approaches.map((approach) => (
          <article
            key={approach.number}
            className="group border border-[var(--border)] bg-white/40 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="font-mono text-sm text-[var(--accent)]">
              {approach.number}
            </span>

            <h3 className="mt-4 text-lg font-medium tracking-tight">
              {approach.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              {approach.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
