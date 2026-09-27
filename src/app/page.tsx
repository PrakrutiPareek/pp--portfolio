import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
      </main>
    </>
  );
}
