import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">Prakruti Pareek</Link>
      </div>

      <div>
        <Link href="#work">Work</Link>
        <Link href="#journey">Journey</Link>
        <Link href="#approach">Approach</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
