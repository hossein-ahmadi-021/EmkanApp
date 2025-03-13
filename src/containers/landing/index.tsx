"use client";

import LandingSectionOne from "@/containers/landing/sectionOne/landingSectionOne";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  rtl: boolean;
  dict: {
    infoCards: {
      title: string;
      subTitle: string;
      desc: string;
      id: number;
    }[];
    tabs: { title: string; id: number }[];
  };
}

export default function Landing({ dict, rtl }: Props) {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 5;
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    (direction: "up" | "down") => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      setCurrentSection((prev) => {
        if (direction === "down" && prev < totalSections - 1) {
          return prev + 1;
        }
        if (direction === "up" && prev > 0) {
          return prev - 1;
        }
        return prev;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    },
    [totalSections],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? "down" : "up");
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [handleScroll]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-y-hidden"
    >
      <motion.div
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        {/* Section 1 */}
        <motion.section className="w-full h-screen flex justify-center items-center text-white relative">
          <LandingSectionOne rtl={rtl} dict={dict} />
          <ScrollButton onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 2 */}
        <motion.section className="w-full h-screen flex justify-center items-center bg-yellow-500 text-white relative">
          Section 2
          <ScrollButton onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 3 */}
        <motion.section className="w-full h-screen flex justify-center items-center bg-green-500 text-white relative">
          Section 3
          <ScrollButton onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 4 */}
        <motion.section className="w-full h-screen flex justify-center items-center bg-teal-500 text-white relative">
          Section 4
          <ScrollButton onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 5 */}
        <motion.section className="w-full h-screen flex justify-center items-center bg-blue-500 text-white relative">
          Section 5
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

function ScrollButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-5 py-3 text-[1.13vh] text-white rounded-md cursor-pointer transition-all"
    >
      دیدن پایین
    </div>
  );
}
