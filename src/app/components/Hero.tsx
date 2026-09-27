export default function Hero() {
  return (
    <section className="flex min-h-[75vh] flex-col justify-center py-20 md:py-28">
      <p className="mb-6 font-mono text-md uppercase tracking-widest text-(--accent)">
        Frontend Developer | React Enthusiast | Full-Stack Curious
      </p>

      <h1 className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
        I build thoughtful,
        <br />
        user-focused web experiences.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--muted) md:text-xl">
        Frontend developer specialising in React, Next.js and TypeScript, with a
        background in science and a passion for building clean, accessible
        interfaces.
      </p>
      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>Express.js</span>
        <span>Node.js</span>
        <span>Tailwind CSS</span>
      </div>
    </section>
  );
}
