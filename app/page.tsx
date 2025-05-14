"use client";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";
import {
  motion,
  // useScroll,
  // useTransform,
  // useAnimation,
  // useInView,
} from "framer-motion";
// import { useEffect, useRef } from "react";

export default function Home() {
  // const { scrollYProgress } = useScroll();

  return (
    <motion.main className="relative overflow-hidden">
      <Header />
      <Contact />
      <Projects />
      <Skills />
    </motion.main>
  );
}
