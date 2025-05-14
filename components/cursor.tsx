import {
  motion,
  useMotionValue,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState, forwardRef } from "react";

interface CursorTextProps {
  letters: string[];
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  delay?: number;
  staggerDuration?: number;
  letterDuration?: number;
}

const CursorText = forwardRef<HTMLDivElement, CursorTextProps>(
  (
    {
      letters,
      className = "",
      delay = 0,
      staggerDuration = 0.1,
      letterDuration = 0.5,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
      once: true,
      amount: 0.5,
      margin: "0px 0px -100px 0px", // Triggers when 100px from bottom of viewport
    });

    const [visibleCount, setVisibleCount] = useState(0);
    // const x = useMotionValue(0);
    // const y = useMotionValue(0);

    // Reset animation when letters change
    useEffect(() => {
      setVisibleCount(0);
    }, [letters]);

    // Animate letters sequentially when in view
    useEffect(() => {
      if (!isInView) return;

      const timeouts: NodeJS.Timeout[] = [];

      letters.forEach((_, i) => {
        timeouts.push(
          setTimeout(() => {
            setVisibleCount((prev) => Math.max(prev, i + 1));
          }, delay * 1000 + i * staggerDuration * 1000)
        );
      });

      return () => timeouts.forEach((t) => clearTimeout(t));
    }, [isInView, letters.length, delay, staggerDuration]);

    return (
      <div
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
          containerRef.current = node;
        }}
        className={`inline-flex items-center justify-center ${className}`}
      >
        <AnimatePresence>
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: i < visibleCount ? 1 : 0,
                y: i < visibleCount ? 0 : 20,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: letterDuration,
                ease: "easeOut",
              }}
              className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-black"
            >
              {letter === "_" ? "\u00A0" : letter}
            </motion.span>
          ))}
        </AnimatePresence>

        {/* Optional animated cursor */}
        {/* {isInView && visibleCount === letters.length && (
          <motion.span
            className="absolute w-1 h-8 bg-pink-600 ml-1"
            style={{ x, y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.2,
              },
            }}
          />
        )} */}
      </div>
    );
  }
);

CursorText.displayName = "CursorText";

export default CursorText;
