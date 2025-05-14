import { motion, useAnimation, useTime, useTransform } from "framer-motion";
import CursorText from "./cursor";
import { useState, useEffect, useRef } from "react";

const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];

export default function Skills() {
  const skillsLetters = "Skills".split("");
  const educationLetters = "Education".split("");

  const [showSkills, setshowSkills] = useState(true);
  const [showEducation, setshowEducation] = useState(false);

  const duplicatedSkills = [...skills, ...skills, ...skills]; // Duplicate the skills array for seamless scrolling

  const handleSkillsClick = () => {
    setshowSkills(true);
    setshowEducation(false);
  };

  const handleEducationClick = () => {
    setshowSkills(false);
    setshowEducation(true);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      setWidth(el.scrollWidth / 2); // half because we duplicate it
      controls.start({
        x: [0, -el.scrollWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          },
        },
      });
    }
  }, [controls]);

  return (
    <motion.div className="w-screen min-h-screen flex flex-col items-center justify-center gap-8 p-6 sm:p-8 bg-gradient-to-b from-[#f6ccde] to-purple-100 text-black relative scroll-x">
      <motion.div className="flex flex-row items-center justify-center gap-4 sticky top-0 left-0 right-0 z-10">
        <motion.button
          className="flex items-center justify-center w-[150px] h-[50px] bg-transparent border-2 border-[#f6ccde] rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scaleY: 1.2, scaleX: 1.1 }}
          onMouseEnter={() => handleSkillsClick()}
        >
          {skillsLetters.map((letter, index) => (
            <motion.h2
              key={index}
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {letter}
            </motion.h2>
          ))}
        </motion.button>
        <motion.button
          className="flex items-center justify-center w-[200px] h-[50px] bg-transparent border-2 border-[#f6ccde] rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scaleY: 1.2, scaleX: 1.1 }}
          onMouseEnter={() => handleEducationClick()}
        >
          {educationLetters.map((letter, index) => (
            <motion.h2
              key={index}
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {letter}
            </motion.h2>
          ))}
        </motion.button>
      </motion.div>

      <motion.div className="flex w-auto h-auto flex-row items-center justify-center gap-4">
        {showEducation && (
          <motion.div className="flex flex-col items-center justify-center gap-4">
            <motion.h2 className="text-3xl md:text-4xl font-bold">
              Education
            </motion.h2>
            <motion.p className="text-lg md:text-xl">
              Bachelor of Science in Computer Science
            </motion.p>
            <motion.p className="text-lg md:text-xl">
              University of XYZ, 2020 - 2024
            </motion.p>
          </motion.div>
        )}

        {showSkills && (
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 50,
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] px-5 py-2 flex justify-center items-center bg-[#f6ccde] text-black text-base rounded-lg shadow-md"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
