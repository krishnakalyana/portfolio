import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

import "./globals.css";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <Navbar />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Experience />
      </section>
    </main>
  );
}
