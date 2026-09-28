export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-(--border) px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
      <p className="font-mono text-xs text-(--muted)">
        © {new Date().getFullYear()} Prakruti Pareek
      </p>

      <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--muted) transition-colors hover:text-(--foreground)"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--muted) transition-colors hover:text-(--foreground)"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
