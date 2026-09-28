const approaches = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the problem, the user and the purpose behind the interface.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I turn designs and ideas into responsive, reusable components with clean, maintainable code.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "I test, review and improve the details across different screen sizes and interactions.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="border-t border-(--border) py-20 md:py-28"
    >
      <div className="mb-12 md:mb-16">
        <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
          My approach
        </p>

        <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
          Thoughtful work, from first idea to final detail.
        </h2>
      </div>

      <div className="grid border-t border-(--border) md:grid-cols-3">
        {approaches.map((approach) => (
          <article
            key={approach.number}
            className="border-b border-(--border) py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <p className="font-mono text-xs text-(--accent)">
              {approach.number}
            </p>

            <h3 className="mt-6 text-2xl font-medium tracking-tight">
              {approach.title}
            </h3>

            <p className="mt-4 max-w-sm leading-relaxed text-(--muted)">
              {approach.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
