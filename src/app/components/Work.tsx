"use client";
import Image from "next/image";
import {useState} from "react";

const projects = [
  {
    number: "01",
    title: "JobEase",
    description:
      "A full-stack job application tracker built as part of my CFGDegree Full Stack Development programme. It lets users manage applications, track statuses and save jobs, with authentication, password reset and job search integration.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "SQLite",
      "Firebase",
    ],
    image: "/images/projects/jobease.png",
    demo: "https://job-tracker-app-beige-theta.vercel.app/",
    github: "https://github.com/PrakrutiPareek/job-tracker-app",
  },
  {
    number: "02",
    title: "Curio",
    description:
      "An AI-powered discovery app designed for curious kids. Parents choose an age group, interest and available time to generate a personalised bundle of facts, jokes, simple science activities and an interactive Q&A experience.",
    technologies: [
      "React",
      "React-Router",
      "JavaScript",
      "Tailwind CSS",
      "AI Integration",
    ],
    image: "/images/projects/curio.png",
    demo: "https://curio-nu-jet.vercel.app/",
    github: "https://github.com/PrakrutiPareek/Curio",
  },
  {
    number: "03",
    title: "Cake Studio",
    description:
      "A responsive fictional bakery website designed to showcase products through a polished, visual-first interface. Built with reusable React components and responsive layouts, with a focus on clean presentation and user-friendly navigation.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
    image: "/images/projects/cake-studio.png",
    demo: "https://cake-shop-smoky.vercel.app/",
    github: "https://github.com/PrakrutiPareek/Cake-shop",
  },
];

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <section
      id="work"
      className="scroll-mt-15 border-t border-(--border) py-4 md:py-8"
    >
      <p className="font-mono text-md uppercase tracking-widest text-(--accent)">
        My work
      </p>

      <h2 className="mt-2 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
        A few things I&apos;ve built along the way.
      </h2>

      <div className="w-full flex flex-wrap gap-2 justify-center">
        {(() => {
          const project = projects[currentProject];

          return (
            <article className="grid w-full grid-cols-[48px_minmax(0,1fr)_48px] items-center gap-x-3 gap-y-6 border-(--border) md:grid-cols-[64px_minmax(0,1fr)_64px] md:gap-x-5 lg:grid-cols-[64px_minmax(0,1.65fr)_minmax(280px,0.85fr)_64px]">
              {currentProject > 0 ? (
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => setCurrentProject(currentProject - 1)}
                  className="col-start-1 row-start-1 flex size-8 select-none items-center justify-center justify-self-center rounded-full border border-(--border) bg-(--background) font-serif text-[1.75rem] leading-none text-(--foreground) shadow-[0_5px_18px_rgba(36,35,31,0.10)] transition-colors hover:border-(--accent) hover:bg-(--accent) hover:text-(--background) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) md:size-10"
                >
                  <span aria-hidden="true">←</span>
                </button>
              ) : (
                <span aria-hidden="true" className="col-start-1 row-start-1" />
              )}

              <div className="relative col-start-2 row-start-1 aspect-[1150/730] min-w-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1280px) 660px, (min-width: 768px) calc(100vw - 240px), calc(100vw - 168px)"
                  className="object-contain"
                />
              </div>

              <div className="col-span-3 row-start-2 grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-start lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:block lg:border-l lg:border-(--border) lg:pl-8">
                <h3 className="flex items-center gap-2 text-2xl font-medium tracking-tight md:text-3xl lg:mb-5">
                  <span className="font-mono text-sm text-(--accent)">
                    {project.number}
                  </span>

                  {project.title}
                </h3>

                <div>
                  <p className="max-w-2xl leading-relaxed text-(--muted)">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-(--border) px-3 py-1 font-mono text-xs text-(--muted)"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-[var(--muted)] border border-[var(--border)] px-5 py-2.5 font-mono text-xs text-[var(--background)] uppercase tracking-widest transition-colors"
                    >
                      <span>View live</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 border border-[var(--border)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition-colors"
                    >
                      <span>GitHub</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {currentProject < projects.length - 1 ? (
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => setCurrentProject(currentProject + 1)}
                  className="col-start-3 row-start-1 flex size-8 select-none items-center justify-center justify-self-center rounded-full border border-(--border) bg-(--background) font-serif text-[1.75rem] leading-none text-(--foreground) shadow-[0_5px_18px_rgba(36,35,31,0.10)] transition-colors hover:border-(--accent) hover:bg-(--accent) hover:text-(--background) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) md:size-10 lg:col-start-4"
                >
                  <span aria-hidden="true">→</span>
                </button>
              ) : (
                <span
                  aria-hidden="true"
                  className="col-start-3 row-start-1 lg:col-start-4"
                />
              )}
            </article>
          );
        })()}
      </div>
    </section>
  );
}
