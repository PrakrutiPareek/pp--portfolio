"use client";
import {useEffect, useState} from "react";

const words = ["clearer.", "simpler.", "faster.", "more useful."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-grid -mx-6 flex min-h-[78vh] flex-col justify-center px-6 py-20 md:-mx-10 md:px-10 md:py-20 lg:-mx-12 lg:px-12">
      <p className="mb-6 font-mono text-md uppercase tracking-widest text-(--accent)">
        Frontend Developer | React Enthusiast | Full-Stack Curious
      </p>

      <h1 className="max-w-5xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-4xl lg:text-5xl">
        I build thoughtful
        <br />
        interfaces that make the web feel{" "}
        <span
          key={words[wordIndex]}
          className="inline-block text-(--accent) animate-[fadeWord_0.5s_ease-in-out]"
        >
          {words[wordIndex]}
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-(--muted) md:text-xl">
        Frontend developer specialising in React, Next.js and TypeScript, with a
        background in science and a passion for building clean, accessible
        interfaces.
      </p>
      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono font-bold text-md uppercase tracking-widest text-(--muted)">
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
