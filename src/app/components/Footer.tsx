export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Prakruti Pareek</p>

      <div>
        <a
          href="https://github.com/PrakrutiPareek"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/prakruti-pareek"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
