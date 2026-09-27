import Link from "next/link";

const navItems = [
  {label: "Work", href: "#work"},
  {label: "Journey", href: "#journey"},
  {label: "Approach", href: "#approach"},
  {label: "Contact", href: "#contact"},
];

export default function Navbar() {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-6 md:px-10 lg:px-12">
      <nav className="flex items-center justify-between border-b border-(--border) pb-5">
        <Link href="/" className="font-medium tracking-tight">
          Prakruti Pareek
        </Link>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
