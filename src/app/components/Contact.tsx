export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[var(--border)] py-10 md:py-14"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]">
            Get in touch
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-2xl font-medium leading-[1.05] tracking-[-0.04em] md:text-4xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            I&apos;m open to junior frontend opportunities, internships and
            projects where I can contribute, learn and continue growing as a
            developer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:prakruti.kapadia@gmail.com"
              className="group inline-flex items-center gap-3 border-[var(--border)] bg-[var(--muted)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--background)] transition-opacity hover:opacity-80"
            >
              <span>Email me</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#work"
              className="group inline-flex items-center gap-3 border border-[var(--border)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition-colors"
            >
              <span>View my work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
