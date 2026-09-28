export default function Journey() {
  return (
    <section id="journey" className="border-t border-(--border) py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
            My journey
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
            From science lab to code lab.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-(--muted) md:text-lg">
            <p>
              My career started in science, where I developed a strong attention
              to detail and a methodical approach to problem-solving. I later
              moved into Salesforce administration before discovering my passion
              for frontend development.
            </p>

            <p>
              Today, I work with React, Next.js and TypeScript to build
              responsive, accessible interfaces and continue growing as a
              frontend engineer.
            </p>

            <div className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-(--muted)">
              <span className="h-px w-8 bg-(--border)" />
              <span>Always learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
