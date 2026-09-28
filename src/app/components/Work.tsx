import Image from "next/image";

const projects = [
  {
    title: "JobEase",
    description:
      "A job application tracker built during my CFGDegree Full Stack Development programme.",
    technologies: ["React", "Firebase", "SQLite"],
    image: "/images/projects/jobease.png",
    demo: "https://job-tracker-app-beige-theta.vercel.app/",
    github: "https://github.com/PrakrutiPareek/job-tracker-app",
  },
  {
    title: "Curio",
    description:
      "A frontend project focused on creating a clean and engaging user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/curio.png",
    demo: "https://curio-nu-jet.vercel.app/",
    github: "https://github.com/PrakrutiPareek/Curio",
  },
  {
    title: "Cake Studio",
    description:
      "A responsive showcase website designed to present a fictional cake studio and its products.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image: "/images/projects/cake-studio.png",
    demo: "https://cake-shop-smoky.vercel.app/",
    github: "https://github.com/PrakrutiPareek/Cake-shop",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-(--border) py-20 md:py-28">
      <div className="mb-12 md:mb-16">
        <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
          My work
        </p>

        <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
          Projects I’ve built and worked on.
        </h2>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="border-t border-(--border) pt-8 md:pt-10"
          >
            <div className="relative mb-6 aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                className="object-contain"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-start">
              <div>
                <p className="mb-2 font-mono text-xs text-(--muted)">
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                  {project.title}
                </h3>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-(--muted)">
                View
              </span>
            </div>

            <p className="max-w-2xl leading-relaxed text-(--muted)">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-(--muted)">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-(--border) px-3 py-1 font-mono text-xs text-(--muted)"
                >
                  {technology}
                </span>
              ))}
            </ul>
            <div className="mt-6 flex gap-5 font-mono text-xs uppercase tracking-widest">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
              >
                Live site ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[var(--border)] pb-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
