"use client";

import {
  motion,
  useTransform,
  useMotionValue,
  useInView,
  useScroll,
} from "motion/react";

import Image from "next/image";
import { useRef } from "react";
import CursorText from "./cursor";

import { useState, useEffect } from "react";

import { Linkedin, Github } from "lucide-react";

export default function Header() {
  const ref = useRef<HTMLDivElement | null>(null);

  const cardRef_right = useRef<HTMLDivElement | null>(null);
  const cardRef_left = useRef<HTMLDivElement | null>(null);

  const xLeft = useMotionValue(0.5);
  const yLeft = useMotionValue(0.5);
  const rotateXLeft = useTransform(yLeft, [0, 1], [15, -15]);
  const rotateYLeft = useTransform(xLeft, [0, 1], [-15, 15]);

  const xRight = useMotionValue(0.5);
  const yRight = useMotionValue(0.5);
  const rotateXRight = useTransform(yRight, [0, 1], [15, -15]);
  const rotateYRight = useTransform(xRight, [0, 1], [-15, 15]);

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove_right = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef_right.current) return;
    const rect = cardRef_right.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    xRight.set(posX);
    yRight.set(posY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef_left.current) return;
    const rect = cardRef_left.current.getBoundingClientRect();
    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    xLeft.set(posX);
    yLeft.set(posY);
  };

  const handleMouseLeave_right = () => {
    xRight.set(0.5);
    yRight.set(0.5);
  };

  const handleMouseLeave_left = () => {
    xLeft.set(0.5);
    yLeft.set(0.5);
  };

  const heading = [
    "👨‍💻",
    "S",
    "O",
    "F",
    "T",
    "W",
    "A",
    "R",
    "E",
    "_",
    "E",
    "N",
    "G",
    "I",
    "N",
    "E",
    "E",
    "R",
  ];

  // const time = useTime();
  // const rotate = useTransform(time, [0, 2000], [0, 1], { clamp: false });
  // const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const description =
    "Welcome to my portfolio! I'm Anushka Chittora, a senior-year B.Tech student in Electronics and Instrumentation with a Computer Science minor at Nirma University. Driven by curiosity and creativity, I aspire to be a software engineer who transforms complex challenges into innovative, real-world tech solutions.";
  return (
    <>
      {!isMobile && (
        <motion.div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#f6ccde] to-purple-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex flex-col md:flex-row w-full max-w-7xl p-4 sm:p-8 gap-10 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Left Side - Text */}
            <motion.div
              className="flex-1 bg-white rounded-3xl shadow-xl flex flex-col items-center md:items-start justify-center p-6 sm:p-10 relative space-y-6 z-2"
              ref={cardRef_left}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave_left}
              style={{
                rotateX: rotateXLeft,
                rotateY: rotateYLeft,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Decorative Images */}
              <img
                src="/human1.png"
                alt="Icon"
                className="w-12 sm:w-16 absolute -top-4 -left-4"
              />

              {/* Animated Heading */}

              <CursorText letters={heading} ref={ref} />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="max-w-md sm:max-w-xl md:max-w-2xl text-center md:text-left text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4 z-20 flex flex-wrap justify-center md:justify-start gap-2"
              >
                {description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-block cursor-pointer"
                    whileHover={{
                      color: "#ff8ef0",
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    style={{ color: "black" }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.p>

              {/* Resume Button */}
              <motion.a
                download
                href="/Cv.pdf"
                initial={{
                  backgroundImage:
                    "linear-gradient(to right, transparent, transparent), linear-gradient(0deg, #ff8ef0, transparent 30%)",
                }}
                animate={{
                  backgroundImage:
                    "linear-gradient(to right, transparent, transparent), linear-gradient(360deg, #ff8ef0 , transparent 30%)",
                }}
                transition={{
                  type: "tween",
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-4 w-36 h-10 sm:w-40 sm:h-10 rounded-full border-2 border-transparent z-10 cursor-pointer flex justify-center items-center text-sm sm:text-base font-medium text-black"
                style={{
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                }}
              >
                Resume
              </motion.a>
              <div className="flex gap-6 mt-4 sm:mt-6 z-20 text-black">
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#ff8ef0" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Github size={24} className="sm:size-7" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ansh-garg-319602255/"
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#ff8ef0" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Linkedin size={24} className="sm:size-7" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="flex-1 bg-white rounded-3xl flex items-center justify-center p-6 sm:p-8"
              ref={cardRef_right}
              onMouseMove={handleMouseMove_right}
              onMouseLeave={handleMouseLeave_right}
              style={{
                rotateX: rotateXRight,
                rotateY: rotateYRight,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="/anushka.jpg"
                alt="Profile image"
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Version */}

      {isMobile && (
        <motion.div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#f6ccde] gap-2 to-purple-100  md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CursorText letters={heading} ref={ref} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-md leading-relaxed px-2 z-20 flex flex-wrap justify-center gap-2 m-2 text-sm"
          >
            {description.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="inline-block cursor-pointer"
                whileHover={{
                  color: "#ff8ef0",
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                style={{ color: "black" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>

          {/* Resume Button */}
          <motion.a
            download
            href="/Cv.pdf"
            initial={{
              backgroundImage:
                "linear-gradient(to right, transparent, transparent), linear-gradient(0deg, #ff8ef0, transparent 30%)",
            }}
            animate={{
              backgroundImage:
                "linear-gradient(to right, transparent, transparent), linear-gradient(360deg, #ff8ef0 , transparent 30%)",
            }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-4 w-36 h-10 rounded-full border-2 border-transparent z-10 cursor-pointer flex justify-center items-center text-sm font-medium text-black"
            style={{
              backgroundClip: "padding-box, border-box",
              backgroundOrigin: "padding-box, border-box",
            }}
          >
            Resume
          </motion.a>
          <div className="flex gap-6 mt-4 sm:mt-6 z-20 text-black">
            <motion.a
              href="https://github.com/"
              target="_blank"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Github size={24} className="sm:size-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ansh-garg-319602255/"
              target="_blank"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Linkedin size={24} className="sm:size-7" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
