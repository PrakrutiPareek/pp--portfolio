"use client";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";
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
      className="scroll-mt-24 border-t border-(--border) py-4 md:py-8"
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
            <article className="grid w-full gap-y-6 border-(--border) lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-x-10">
              <div className="relative aspect-[1150/730] min-w-0 overflow-hidden lg:col-start-1 lg:row-start-1">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1280px) 660px, (min-width: 768px) calc(100vw - 240px), calc(100vw - 168px)"
                  className="object-contain"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-start lg:col-start-2 lg:row-start-1 lg:block lg:border-l lg:border-(--border) lg:pl-8">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 lg:mb-5">
                  <h3 className="flex min-w-0 items-center gap-2 text-2xl font-medium tracking-tight md:text-3xl">
                    <span className="font-mono text-md text-(--accent)">
                      {project.number}
                    </span>

                    {project.title}
                  </h3>

                  <div className="ml-auto grid shrink-0 grid-cols-2 gap-1">
                    {currentProject > 0 ? (
                      <button
                        type="button"
                        aria-label="Previous project"
                        onClick={() => setCurrentProject(currentProject - 1)}
                        className="group inline-flex size-11 items-center justify-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                      >
                        <span className="flex size-[30px] items-center justify-center border border-(--accent) bg-(--border) text-(--foreground)">
                          <ArrowLeft
                            aria-hidden="true"
                            size={16}
                            strokeWidth={1.75}
                            className="transition-transform duration-200 group-hover:-translate-x-0.5"
                          />
                        </span>
                      </button>
                    ) : (
                      <span aria-hidden="true" className="size-11" />
                    )}

                    {currentProject < projects.length - 1 ? (
                      <button
                        type="button"
                        aria-label="Next project"
                        onClick={() => setCurrentProject(currentProject + 1)}
                        className="group inline-flex size-11 items-center justify-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                      >
                        <span className="flex size-[30px] items-center justify-center border border-(--accent) bg-(--border) text-(--foreground)">
                          <ArrowRight
                            aria-hidden="true"
                            size={16}
                            strokeWidth={1.75}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </span>
                      </button>
                    ) : (
                      <span aria-hidden="true" className="size-11" />
                    )}
                  </div>
                </div>

                <div>
                  <p className="min-h-48 max-w-2xl leading-relaxed text-(--muted) sm:min-h-36 md:min-h-32 lg:min-h-48 xl:min-h-40">
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
                      className="group inline-flex items-center gap-3 bg-[var(--muted)] border border-[var(--border)] px-5 py-2.5 font-mono text-xs text-[var(--background)] uppercase tracking-widest transition-opacity hover:opacity-80"
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
            </article>
          );
        })()}
      </div>
    </section>
  );
}
