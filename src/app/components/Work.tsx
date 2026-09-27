const projects = [
  {
    title: "JobEase",
    description:
      "A job application tracker built during my CFGDegree Full Stack Development programme.",
    technologies: ["React", "Firebase", "SQLite"],
  },
  {
    title: "Curio",
    description:
      "A frontend project focused on creating a clean and engaging user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cake Studio",
    description:
      "A responsive showcase website designed to present a fictional cake studio and its products.",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
];

export default function Work() {
  return (
    <section id="work">
      <p>Selected work</p>

      <h2>Things I&apos;ve built.</h2>

      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
