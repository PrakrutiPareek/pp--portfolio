"use client";

import Link from "next/link";
import {useState} from "react";
import {Download} from "lucide-react";

const navItems = [
  {label: "Work", href: "#work"},
  {label: "Journey", href: "#journey"},
  {label: "Approach", href: "#approach"},
  {label: "Contact", href: "#contact"},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-7xl bg-(--background)/95 px-6 backdrop-blur-sm md:px-10 lg:px-12">
      <nav className="flex items-center justify-between border-b border-(--border) py-5">
        <Link
          href="/"
          className="font-medium tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Prakruti Pareek
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/Prakruti_Pareek_Resume.pdf"
            download
            className="group inline-flex items-center gap-3 border border-[var(--border)] bg-[var(--muted)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Resume
            <Download
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px bg-[var(--foreground)] transition-all ${
              menuOpen ? "w-6 -translate-y-0.5 rotate-45" : "w-6"
            }`}
          />
          <span
            className={`h-px bg-[var(--foreground)] transition-all ${
              menuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-4"
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-(--border) py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-(--muted) transition-colors hover:text-(--foreground)"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/Prakruti_Pareek_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="group inline-flex items-center gap-3 self-start border border-[var(--border)] bg-[var(--muted)] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[var(--background)] transition-opacity hover:opacity-80"
            >
              Resume
              <Download
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
