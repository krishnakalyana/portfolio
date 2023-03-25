import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

import "./globals.css";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div
        style={{
          width: "100%",
          height: "300%",
          position: "fixed",
          zIndex: "-1",
          background: "rgb(0,0,0)",
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(93,93,93,1) 80%)",
        }}
      ></div>
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
