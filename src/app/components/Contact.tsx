export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-15 border-t border-(--border) py-4 md:py-8"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
        <div>
          <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
            Get in touch
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--muted)">
            I&apos;m open to junior frontend opportunities, internships and
            projects where I can contribute, learn and continue growing as a
            developer.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-block border-b border-(--foreground) pb-1 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
          >
            Say hello ↗
          </a>
        </div>
      </div>
    </section>
  );
}
