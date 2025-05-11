"use client";

// import Skills from "@/components/skills";
import { motion, useScroll, useTransform } from "motion/react";

import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Animation ranges
  const headerRange = [0, 0.4];
  const skillsRange = [0.4, 0.8];
  const endRange = [0.8, 1];

  // Header effects
  const headerY = useTransform(
    scrollYProgress,
    [headerRange[0], headerRange[1], skillsRange[0], skillsRange[1]],
    ["0%", "0%", "-30%", "-30%"]
  );
  const headerOpacity = useTransform(
    scrollYProgress,
    [headerRange[0], headerRange[1], skillsRange[0], skillsRange[1]],
    [1, 1, 0, 0]
  );
  const headerScale = useTransform(
    scrollYProgress,
    [headerRange[0], headerRange[1]],
    [1, 1.05]
  );
  const headerRotate = useTransform(
    scrollYProgress,
    [headerRange[0], headerRange[1]],
    [0, -2]
  );

  // Skills effects
  const skillsY = useTransform(
    scrollYProgress,
    [
      headerRange[0],
      headerRange[1],
      skillsRange[0],
      skillsRange[1],
      endRange[0],
      endRange[1],
    ],
    ["30%", "30%", "0%", "0%", "-20%", "-20%"]
  );
  const skillsOpacity = useTransform(
    scrollYProgress,
    [headerRange[0], headerRange[1], skillsRange[0], skillsRange[1]],
    [0, 0, 1, 1]
  );
  const skillsScale = useTransform(
    scrollYProgress,
    [skillsRange[0], skillsRange[1]],
    [0.95, 1]
  );
  const skillsBlur = useTransform(
    scrollYProgress,
    [
      skillsRange[0] - 0.1,
      skillsRange[0],
      skillsRange[1],
      skillsRange[1] + 0.1,
    ],
    [10, 0, 0, 10]
  );

  // Background effects
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f6ccde", "#f6ccde", "#f6ccde"]
  );
  const bgStarsOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.2]
  );

  return (
    <motion.main className="relative" style={{ backgroundColor: bgColor }}>
      {/* Animated background elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: bgStarsOpacity }}
      >
        {/* Starry background or other decorative elements */}
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-30" />
      </motion.div>

      {/* Scrollable content container */}
      <div className="h-[300vh] relative">
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Header section */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              y: headerY,
              opacity: headerOpacity,
              scale: headerScale,
              rotate: headerRotate,
            }}
          >
            <Header />
          </motion.div>

          {/* Skills section */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              y: skillsY,
              opacity: skillsOpacity,
              scale: skillsScale,
              filter: `blur(${skillsBlur}px)`,
            }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed bottom-4 left-4 h-1 bg-white rounded-full"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          opacity: useTransform(
            scrollYProgress,
            [0, 0.1, 0.9, 1],
            [0, 1, 1, 0]
          ),
        }}
      />
    </motion.main>
  );
}
