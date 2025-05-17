import { motion } from "framer-motion";
import { useState } from "react";

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

const certificates: Array<{ name: string; link: string }> = [
  { name: "Certified JavaScript Developer", link: "#" },
  { name: "React - The Complete Guide", link: "#" },
  { name: "Node.js Certification", link: "#" },
  { name: "MongoDB Developer Certification", link: "#" },
];

export default function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  const [showCertificates, setShowCertificates] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills(true);
    setShowCertificates(false);
  };

  const handleCertificatesClick = () => {
    setShowSkills(false);
    setShowCertificates(true);
  };
  return (
    <motion.div className="relative place-items-center w-screen min-h-screen bg-[#f6ccde] text-black">
      {/* Fixed Buttons at the Top */}
      <motion.div
        className="top-5 right-5 w-5/6 h-1/3 z-20 mt-30  flex items-center justify-center gap-4 backdrop-blur-lg bg-white/20 border-b border-white/30 rounded-2xl p-4 shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="text-xl sm:text-2xl flex-1 max-w-[200px] rounded-lg bg-white/10 hover:bg-[#ff8ef0] transition-colors duration-300 font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSkillsClick}
        >
          TechStack
        </motion.button>
        <motion.button
          className="text-xl sm:text-2xl flex-1 max-w-[200px] rounded-lg bg-white/10 hover:bg-[#ff8ef0] transition-colors duration-300 font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCertificatesClick}
        >
          Certificate
        </motion.button>
      </motion.div>

      {/* Content Section with Top Padding to Prevent Overlap */}
      <motion.div className="pt-32 px-4 w-full h-full">
        {showSkills && (
          <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto h-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-lg sm:text-xl px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-md hover:bg-[#ff8ef0] transition-colors duration-300  flex items-center justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}

        {showCertificates && (
          <div className="w-full h-[80vh] overflow-y-auto px-4">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative flex flex-col justify-end rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer h-80 hover:bg-[#ff8ef0] transition-colors duration-300"
                >
                  <img
                    src={certificate.link}
                    alt={certificate.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <h3 className="relative z-10 text-xl font-semibold text-white drop-shadow-md p-4">
                    {certificate.name}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
