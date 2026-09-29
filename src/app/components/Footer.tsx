import {FaGithub} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-[var(--border)] px-6 py-8 md:px-10 lg:px-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Prakruti Pareek
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/PrakrutiPareek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-11 items-center justify-center text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/prakruti-pareek/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-11 items-center justify-center text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <CiLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
