"use client";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "./globals.css";

export default function Home() {
  const ref = useRef(null);

  const swiitchToExp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden ">
      <div
        style={{
          width: "100%",
          height: "300%",
          position: "absolute",
          zIndex: "-1",
          background: "rgb(0,0,0)",
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(93,93,93,1) 80%)",
        }}
      ></div>
      <section>
        <Navbar swiitchToExp={swiitchToExp} />
      </section>
      <section>
        <Intro />
      </section>
      <section ref={ref}>
        <Experience />
      </section>
    </main>
  );
}
