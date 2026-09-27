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
    <section id="approach">
      <p>How I work</p>

      <h2>Thoughtful development, from idea to interface.</h2>

      <div>
        {approaches.map((approach) => (
          <article key={approach.number}>
            <span>{approach.number}</span>
            <h3>{approach.title}</h3>
            <p>{approach.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
