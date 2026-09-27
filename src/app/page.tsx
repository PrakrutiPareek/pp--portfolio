import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Work />
        <Approach />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
