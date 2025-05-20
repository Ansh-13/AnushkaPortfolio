import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TechStack = {
  Languages: ["PYTHON", "MATLAB"],
  Plc: [
    "Ladder Logic (LD)",
    "Structured Text (ST)",
    "Function Block Diagram (FBD)",
    "Sequential Function Chart (SFC)",
    "HMI Design",
  ],
  AIML: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "scikit-learn"],
};

const certificates = [
  { name: "Data Analysis With Pythons", link: "image.png" },
  { name: "Accounting Job Simulation", link: "koch.png" },
  {
    name: "CorporateFinanceFundamentals",
    link: "CorporateFinanceFundamentals.png",
  },
  { name: "Matlab", link: "Matlab.png" },
  { name: "freecodecamp-ML", link: "freecodecamp-ML.png" },
];

const Skills = () => {
  const [showSkills, setShowSkills] = useState(true);
  const [showCertificates, setShowCertificates] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative place-items-center w-screen min-h-screen bg-[#f6ccde] text-black"
    >
      {/* Top Buttons */}
      <motion.div
        className="top-5 right-5 w-5/6 h-1/3 z-20 mt-30 flex items-center justify-center gap-4 backdrop-blur-lg bg-white/20 border-b border-white/30 rounded-2xl p-4 shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className="text-xl sm:text-2xl flex-1 max-w-[200px] rounded-lg bg-white/10 hover:bg-[#f3e8ff] font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: showSkills ? "#f3e8ff" : "transparent" }}
          onClick={() => {
            setShowSkills(true);
            setShowCertificates(false);
          }}
        >
          TechStack
        </motion.button>
        <motion.button
          className="text-xl sm:text-2xl flex-1 max-w-[200px] rounded-lg bg-white/10 hover:bg-[#f3e8ff] font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: showCertificates ? "#f3e8ff" : "transparent",
          }}
          onClick={() => {
            setShowSkills(false);
            setShowCertificates(true);
          }}
        >
          Certificate
        </motion.button>
      </motion.div>

      {/* Content */}
      <motion.div className="pt-32 px-4 w-full h-full">
        {showSkills && (
          <motion.div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(TechStack).map(([category, items]) => (
              <motion.div
                key={category}
                className="bg-gradient-to-b from-[#f6ccde] to-purple-100/30 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Header */}
                <h3 className="text-black/80 text-2xl font-semibold mb-4 pb-2 border-b border-white/20 tracking-wide">
                  {category}
                </h3>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="text-sm sm:text-base px-4 py-2 rounded-full bg-white/10 text-black shadow hover:bg-purple-100 hover:text-black transition-all duration-300"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showCertificates && (
          <div className="w-full h-[80vh] overflow-y-auto px-4">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: 0.6,
                  }}
                  className="relative flex flex-col justify-end rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer h-80 hover:bg-[#ff8ef0]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6 }}
                >
                  <img
                    src={certificate.link}
                    alt={certificate.name}
                    className="absolute inset-0 h-full w-full object-fill "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
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
};

export default Skills;
