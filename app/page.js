"use client";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "./globals.css";

export default function Home() {
  const ref = useRef(null);
  const aboutRef = useRef(null)

  const swiitchToExp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const switchToAbout =()=>{
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main className="overflow-x-hidden ">
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
      <section className="fixed z-20">
        <Navbar swiitchToExp={swiitchToExp} switchToAbout={switchToAbout} />
      </section>
      <section ref={aboutRef}>
        <Intro />
      </section>
      <section ref={ref}>
        <Experience />
      </section>
    </main>
  );
}
