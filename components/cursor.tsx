import { animate, motion, useMotionValue, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  letters: string[];
  className?: string;
}

export default function CursorText({ letters, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Animate letters one by one after in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < letters.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isInView, letters.length]);

  // Move cursor to last visible letter
  useEffect(() => {
    const el = letterRefs.current[visibleCount - 1];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement!.getBoundingClientRect();
      const offsetX = rect.right - parentRect.left;
      const offsetY = rect.top - parentRect.top;

      animate(x, offsetX, {
        type: "spring",
        stiffness: 300,
        damping: 25,
      });
      animate(y, offsetY, {
        type: "spring",
        stiffness: 300,
        damping: 25,
      });
    }
  }, [visibleCount, x, y]);

  return (
    <div ref={containerRef} className={`text-center ${className}`}>
      <div className="inline-flex items-center justify-center relative">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i < visibleCount ? 1 : 0 }}
            transition={{ duration: 0.01 }}
            className="inline-block text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold text-black"
          >
            {letter === "_" ? "\u00A0" : letter}
          </motion.span>
        ))}

        {/* Optional blinking cursor */}
        {/* <motion.span
          className="absolute w-1 h-[1.5em] bg-pink-600"
          style={{ x, y }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
          }}
        /> */}
      </div>
    </div>
  );
}
