"use client";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";
import {
  motion,
  useScroll,
  useTransform,
  // useScroll,
  // useTransform,
  // useAnimation,
  // useInView,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ContainerRef = useRef(null);
  const HeaderRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const SkillsRef = useRef<HTMLDivElement>(null);

  const headerScroll = useScroll({
    target: HeaderRef,
    offset: ["start start", "end start"],
  });

  const projectsScroll = useScroll({
    target: ProjectsRef,
    offset: ["start end", "center center"],
  });
  const contactScroll = useScroll({
    target: ContactRef,
    offset: ["start end", "center center"],
  });
  const skillsScroll = useScroll({
    target: SkillsRef,
    offset: ["start end", "center center"],
  });

  const headerOpacity = useTransform(
    headerScroll.scrollYProgress,
    [0.5, 0.6],
    [1, 0.7]
  );
  const projectsOpacity = useTransform(
    projectsScroll.scrollYProgress,
    [1, 0],
    [1, 0.7]
  );
  const contactOpacity = useTransform(
    contactScroll.scrollYProgress,
    [1, 0],
    [1, 0.7]
  );
  const skillsOpacity = useTransform(
    skillsScroll.scrollYProgress,
    [0.5, 0.6],
    [1, 0.7]
  );

  // const headerY = useTransform(headerScroll.scrollYProgress, [0, 1], [0, -50]);
  // const contactY = useTransform(
  //   contactScroll.scrollYProgress,
  //   [0, 1],
  //   [0, -50]
  // );
  // const projectsY = useTransform(
  //   projectsScroll.scrollYProgress,
  //   [0, 1],
  //   [0, -50]
  // );
  // const skillsY = useTransform(skillsScroll.scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.main className="relative overflow-hidden" ref={ContainerRef}>
      <motion.div ref={HeaderRef} style={{ opacity: headerOpacity }}>
        <Header />
      </motion.div>
      <motion.div ref={ContactRef} style={{ opacity: contactOpacity }}>
        <Contact />
      </motion.div>
      <motion.div ref={ProjectsRef} style={{ opacity: projectsOpacity }}>
        <Projects />
      </motion.div>
      <motion.div ref={SkillsRef} style={{ opacity: skillsOpacity }}>
        <Skills />
      </motion.div>
    </motion.main>
  );
}
