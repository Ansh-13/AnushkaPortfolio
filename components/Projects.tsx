// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { AnimatedDialog } from "./DialogBox";
// import {
//   Github,
//   MoveLeft,
//   MoveRight,
//   Presentation,
//   Target,
// } from "lucide-react";
// import CursorText from "./cursor";

// interface Project {
//   name: string;
//   description: string;
//   githubLink: string;
//   Technology?: string;
//   Learning?: string;
//   image_link?: string;
// }

// const projects: Project[] = [
//   {
//     name: "Remake",
//     description: `This is a shortvideoweb-app build on Nextjs...`,
//     githubLink: "https://github.com/Ansh-13/Remake/tree/main",
//     Technology: "MongoDB, Imagekit, Nextjs",
//     Learning: "Mongo DB, Imagekit, Nextjs",
//     image_link: "Remake.png",
//   },
//   {
//     name: "Remake",
//     description: `This is a shortvideoweb-app build on Nextjs...`,
//     githubLink: "https://github.com/Ansh-13/Remake/tree/main",
//     Technology: "MongoDB, Imagekit, Nextjs",
//     Learning: "Mongo DB, Imagekit, Nextjs",
//     image_link: "Remake.png",
//   },
//   {
//     name: "Remake",
//     description: `This is a shortvideoweb-app build on Nextjs...`,
//     githubLink: "https://github.com/Ansh-13/Remake/tree/main",
//     Technology: "MongoDB, Imagekit, Nextjs",
//     Learning: "Mongo DB, Imagekit, Nextjs",
//     image_link: "Remake.png",
//   },
//   {
//     name: "Remake",
//     description: `This is a shortvideoweb-app build on Nextjs...`,
//     githubLink: "https://github.com/Ansh-13/Remake/tree/main",
//     Technology: "MongoDB, Imagekit, Nextjs",
//     Learning: "Mongo DB, Imagekit, Nextjs",
//     image_link: "Remake.png",
//   },
//   {
//     name: "Remake",
//     description: `This is a shortvideoweb-app build on Nextjs...`,
//     githubLink: "https://github.com/Ansh-13/Remake/tree/main",
//     Technology: "MongoDB, Imagekit, Nextjs",
//     Learning: "Mongo DB, Imagekit, Nextjs",
//     image_link: "Remake.png",
//   },
//   // ... Other projects
// ];

// const items = [1, 2, 3, 4, 5];
// const colors = ["#0cdcf7", "#d375c6", "#0cdcf7", "#d375c6", "#0cdcf7"];

// export default function Projects() {
//   const [selectedItem, setSelectedItem] = useState(items[0]);
//   const [direction, setDirection] = useState<1 | -1>(1);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);
//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   const setSlide = (newDirection: 1 | -1) => {
//     const nextItem =
//       ((selectedItem - 1 + newDirection + items.length) % items.length) + 1;
//     setSelectedItem(nextItem);
//     setDirection(newDirection);
//     setDialogOpen(false);
//   };

//   const color = colors[selectedItem - 1];
//   const currentProject = projects[selectedItem - 1];
//   const text = ["P", "r", "o", "j", "e", "c", "t", "s"];

//   return (
//     <div className="h-screen w-full overflow-hidden bg-[#f6ccde]">
//       <motion.div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 md:py-12">
//         <motion.h1 className="mb-4 md:mb-6 text-center z-10">
//           <CursorText
//             letters={text}
//             ref={ref}
//             className="text-5xl md:text-5xl font-bold text-black"
//           />
//         </motion.h1>

//         <motion.div className="flex flex-col items-center justify-center w-full px-4 py-4 md:py-6">
//           <div className="flex w-full max-w-6xl mt-4 items-center justify-center gap-2 md:gap-4 relative">
//             <motion.button
//               initial={false}
//               animate={{ backgroundColor: color }}
//               aria-label="Previous"
//               className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
//               onClick={() => setSlide(-1)}
//               whileFocus={{ outline: `2px solid ${color}` }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <MoveLeft className="w-4 h-4 md:w-5 md:h-5" />
//             </motion.button>

//             <AnimatePresence
//               custom={direction}
//               initial={false}
//               mode="popLayout"
//             >
//               <motion.div
//                 key={selectedItem}
//                 custom={direction}
//                 initial={{ opacity: 0, x: direction * 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: direction * -50 }}
//                 transition={{ type: "spring", damping: 20, stiffness: 300 }}
//                 className="relative w-full h-64 sm:h-80 lg:h-96 max-w-md md:max-w-lg lg:max-w-xl"
//               >
//                 <motion.div className="group relative h-full w-full rounded-lg">
//                   {/* Static solid border */}
//                   <span className="absolute inset-0 border-2 border-solid border-purple-100 rounded-lg transition-all duration-300 group-hover:opacity-0" />

//                   {/* Dotted border (appears on hover) */}
//                   <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />

//                   <div className="relative flex h-full w-full transform items-end border-2 border-transparent bg-white rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
//                     {/* Default content */}
//                     <div className="p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300 w-full group-hover:opacity-0 group-hover:absolute">
//                       <div className="relative aspect-video w-full overflow-hidden rounded-md mb-4">
//                         <img
//                           alt={currentProject.name}
//                           src={currentProject.image_link}
//                           className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                           loading="lazy"
//                         />
//                       </div>
//                       <h2 className="mt-3 text-center text-lg font-bold text-black transition-all sm:mt-4 sm:text-xl md:text-2xl underline">
//                         {currentProject.name}
//                       </h2>
//                     </div>

//                     {/* Hover content */}
//                     <div className="absolute p-4 transition-opacity w-full h-full flex flex-col opacity-0 group-hover:opacity-100 sm:p-6 lg:p-8">
//                       <div className="flex-grow">
//                         {currentProject.Technology && (
//                           <div className="flex items-center mb-2 text-gray-700">
//                             <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
//                             <span className="text-sm md:text-base">
//                               {currentProject.Technology}
//                             </span>
//                           </div>
//                         )}
//                         {currentProject.Learning && (
//                           <div className="flex items-center mb-4 text-gray-700">
//                             <Presentation className="mr-2 h-4 w-4 md:h-5 md:w-5" />
//                             <span className="text-sm md:text-base">
//                               {currentProject.Learning}
//                             </span>
//                           </div>
//                         )}
//                         <p className="text-sm md:text-base text-gray-700 mb-4">
//                           {currentProject.description}
//                         </p>
//                         {isMobile && currentProject.githubLink && (
//                           <a
//                             href={currentProject.githubLink}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base"
//                           >
//                             <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
//                             View on GitHub
//                           </a>
//                         )}
//                       </div>

//                       {!isMobile && currentProject.githubLink && (
//                         <AnimatedDialog
//                           trigger={
//                             <motion.button
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               className="px-3 py-1 md:px-4 md:py-2 rounded-lg self-end text-white font-medium"
//                               style={{ backgroundColor: color }}
//                             >
//                               <span className="text-xs md:text-sm">
//                                 View Details
//                               </span>
//                             </motion.button>
//                           }
//                           onOpenChange={(isOpen) => setDialogOpen(isOpen)}
//                         >
//                           <div className="p-4 sm:p-6 max-w-[90vw] sm:max-w-md md:max-w-lg w-full">
//                             <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                               {currentProject.name}
//                             </h2>
//                             <p className="text-sm sm:text-base text-gray-700 mb-4">
//                               {currentProject.description}
//                             </p>
//                             <a
//                               href={currentProject.githubLink}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base"
//                             >
//                               <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
//                               View on GitHub
//                             </a>
//                           </div>
//                         </AnimatedDialog>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             <motion.button
//               initial={false}
//               animate={{ backgroundColor: color }}
//               aria-label="Next"
//               className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
//               onClick={() => setSlide(1)}
//               whileFocus={{ outline: `2px solid ${color}` }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedDialog } from "./DialogBox";
import {
  Github,
  MoveLeft,
  MoveRight,
  Presentation,
  Target,
} from "lucide-react";
import CursorText from "./cursor";

interface Project {
  name: string;
  description: string;
  githubLink: string;
  Technology?: string;
  Learning?: string;
  image_link?: string;
}

const projects: Project[] = [
  {
    name: "Remake",
    description: `This is a short video web-app built on Nextjs...`,
    githubLink: "https://github.com/Ansh-13/Remake/tree/main",
    Technology: "MongoDB, Imagekit, Nextjs",
    Learning: "Mongo DB, Imagekit, Nextjs",
    image_link: "Remake.png",
  },
  {
    name: "Remake",
    description: `This is a short video web-app built on Nextjs...`,
    githubLink: "https://github.com/Ansh-13/Remake/tree/main",
    Technology: "MongoDB, Imagekit, Nextjs",
    Learning: "Mongo DB, Imagekit, Nextjs",
    image_link: "Remake.png",
  },
  {
    name: "Remake",
    description: `This is a short video web-app built on Nextjs...`,
    githubLink: "https://github.com/Ansh-13/Remake/tree/main",
    Technology: "MongoDB, Imagekit, Nextjs",
    Learning: "Mongo DB, Imagekit, Nextjs",
    image_link: "Remake.png",
  },
  {
    name: "Remake",
    description: `This is a short video web-app built on Nextjs...`,
    githubLink: "https://github.com/Ansh-13/Remake/tree/main",
    Technology: "MongoDB, Imagekit, Nextjs",
    Learning: "Mongo DB, Imagekit, Nextjs",
    image_link: "Remake.png",
  },
  {
    name: "Remake",
    description: `This is a short video web-app built on Nextjs...`,
    githubLink: "https://github.com/Ansh-13/Remake/tree/main",
    Technology: "MongoDB, Imagekit, Nextjs",
    Learning: "Mongo DB, Imagekit, Nextjs",
    image_link: "Remake.png",
  },
];

const items = [1, 2, 3, 4, 5];
const colors = ["#0cdcf7", "#d375c6", "#0cdcf7", "#d375c6", "#0cdcf7"];

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const setSlide = (newDirection: 1 | -1) => {
    const nextItem =
      ((selectedItem - 1 + newDirection + items.length) % items.length) + 1;
    setSelectedItem(nextItem);
    setDirection(newDirection);
    setDialogOpen(false);
  };

  const color = colors[selectedItem - 1];
  const currentProject = projects[selectedItem - 1];
  const text = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center gap-8 p-6 sm:p-8 bg-gradient-to-b from-[#f6ccde] to-purple-100 text-black relative overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 md:py-12">
        {/* Static Heading - moved outside any animation wrappers */}
        <div className="mb-4 md:mb-6 text-center z-10">
          <CursorText
            letters={text}
            ref={ref}
            className="text-5xl md:text-5xl font-bold text-black"
          />
        </div>

        {/* Project Carousel Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-4 md:py-6">
          <div className="flex w-full max-w-6xl mt-4 items-center justify-center gap-2 md:gap-4 relative">
            {/* Left Arrow */}
            <motion.button
              initial={false}
              animate={{ backgroundColor: color }}
              aria-label="Previous"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
              onClick={() => setSlide(-1)}
              whileFocus={{ outline: `2px solid ${color}` }}
              whileTap={{ scale: 0.9 }}
            >
              <MoveLeft className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>

            {/* Project Carousel */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 max-w-md md:max-w-lg lg:max-w-xl">
              <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
              >
                <motion.div
                  key={selectedItem}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="w-full h-full"
                >
                  {/* Project Image Card */}
                  <motion.div className="group relative h-full w-full rounded-lg">
                    {/* Static solid border */}
                    <span className="absolute inset-0 border-2 border-solid border-purple-100 rounded-lg transition-all duration-300 group-hover:opacity-0" />

                    {/* Dotted border (appears on hover) */}
                    <span className="absolute inset-0 border-2 border-dashed border-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    <div className="relative flex h-full w-full transform items-end border-2 border-transparent bg-white rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                      {/* Default content */}
                      <div className="p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300 w-full group-hover:opacity-0 group-hover:absolute">
                        <div className="relative aspect-video w-full overflow-hidden rounded-md mb-4">
                          <img
                            alt={currentProject.name}
                            src={currentProject.image_link}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <h2 className="mt-3 text-center text-lg font-bold text-black transition-all sm:mt-4 sm:text-xl md:text-2xl underline">
                          {currentProject.name}
                        </h2>
                      </div>

                      {/* Hover content */}
                      <div className="absolute p-4 transition-opacity w-full h-full flex flex-col opacity-0 group-hover:opacity-100 sm:p-6 lg:p-8">
                        <div className="flex-grow">
                          {currentProject.Technology && (
                            <div className="flex items-center mb-2 text-gray-700">
                              <Target className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                              <span className="text-sm md:text-base">
                                {currentProject.Technology}
                              </span>
                            </div>
                          )}
                          {currentProject.Learning && (
                            <div className="flex items-center mb-4 text-gray-700">
                              <Presentation className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                              <span className="text-sm md:text-base">
                                {currentProject.Learning}
                              </span>
                            </div>
                          )}
                          <p className="text-sm md:text-base text-gray-700 mb-4">
                            {currentProject.description}
                          </p>
                          {isMobile && currentProject.githubLink && (
                            <a
                              href={currentProject.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base"
                            >
                              <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                              View on GitHub
                            </a>
                          )}
                        </div>

                        {/* Details Button */}
                        {!isMobile && currentProject.githubLink && (
                          <AnimatedDialog
                            trigger={
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 py-1 md:px-4 md:py-2 rounded-lg self-end text-white font-medium"
                                style={{ backgroundColor: color }}
                              >
                                <span className="text-xs md:text-sm">
                                  View Details
                                </span>
                              </motion.button>
                            }
                            onOpenChange={(isOpen) => setDialogOpen(isOpen)}
                          >
                            <div className="p-4 sm:p-6 max-w-[90vw] sm:max-w-md md:max-w-lg w-full">
                              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                                {currentProject.name}
                              </h2>
                              <p className="text-sm sm:text-base text-gray-700 mb-4">
                                {currentProject.description}
                              </p>
                              <a
                                href={currentProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base"
                              >
                                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                View on GitHub
                              </a>
                            </div>
                          </AnimatedDialog>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              initial={false}
              animate={{ backgroundColor: color }}
              aria-label="Next"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10"
              onClick={() => setSlide(1)}
              whileFocus={{ outline: `2px solid ${color}` }}
              whileTap={{ scale: 0.9 }}
            >
              <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
