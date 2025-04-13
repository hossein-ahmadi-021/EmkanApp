"use client";
import LandingSectionOne from "@/containers/landing/sectionOne/landingSectionOne";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AppIcon from "@/common/appIcon";
import { homeSectionDictTypes } from "@/types/landing/landing.types";
import { useHeaderStore } from "@/store/headerStore";
import LandingSectionTwo from "@/containers/landing/sectionTwo/landingSectionTwo";
import LandingSectionThree from "@/containers/landing/sectionThree/landingSectionThree";
import LandingSectionFour from "@/containers/landing/sectionFour/landingSectionFour";
import LandingSectionFive from "@/containers/landing/sectionFive/landingSectionFive";

interface Props {
  rtl: boolean;
  dict: homeSectionDictTypes;
}

export default function Landing({ dict, rtl }: Props) {
  const resetHeaderColor = useHeaderStore((state) => state.reset);
  const [currentSection, setCurrentSection] = useState(0);
  const [isSectionTwoScrolling, setIsSectionTwoScrolling] = useState(false);
  const totalSections = 5;
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

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
    [totalSections]
  );

  const handleSectionTwoComplete = useCallback(() => {
    setIsSectionTwoScrolling(false);
    handleScroll("down");
  }, [handleScroll]);

  const handleSectionTwoBack = useCallback(() => {
    setIsSectionTwoScrolling(false);
    handleScroll("up");
  }, [handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (currentSection === 1) {
        setIsSectionTwoScrolling(true);
        return;
      }

      e.preventDefault();
      handleScroll(e.deltaY > 0 ? "down" : "up");
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (currentSection === 1) {
        setIsSectionTwoScrolling(true);
        return;
      }

      e.preventDefault();
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      // Only trigger if the swipe is significant enough
      if (Math.abs(diff) > 50) {
        handleScroll(diff > 0 ? "down" : "up");
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleScroll, currentSection]);

  useEffect(() => {
    if (currentSection === 0) {
      useHeaderStore.setState({ importantColor: "white" });
    } else if (currentSection === 1) {
      useHeaderStore.setState({ importantColor: "primary" });
    }
  }, [currentSection]);

  useEffect(() => {
    return () => {
      resetHeaderColor();
    };
  }, [resetHeaderColor]);

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
          <ScrollButton dict={dict} onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 2 */}
        <motion.section className="w-full h-screen flex justify-center items-center text-white relative overflow-hidden">
          <LandingSectionTwo
            isActive={currentSection === 1}
            rtl={rtl}
            onSubSectionComplete={handleSectionTwoComplete}
            onSubSectionBack={handleSectionTwoBack}
          />
          {!isSectionTwoScrolling && (
            <ScrollButton dict={dict} onClick={() => handleScroll("down")} />
          )}
        </motion.section>

        {/* Section 3 */}
        <motion.section className="w-full h-screen flex justify-center items-center relative">
          <LandingSectionThree rtl={rtl} dict={dict} />
          <ScrollButton dict={dict} onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 4 */}
        <motion.section className="w-full h-screen flex justify-center items-center relative">
          <LandingSectionFour rtl={rtl} dict={dict} />
          <ScrollButton dict={dict} onClick={() => handleScroll("down")} />
        </motion.section>

        {/* Section 5 */}
        <motion.section className="w-full h-screen flex justify-center items-center text-white relative">
          <LandingSectionFive />
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

function ScrollButton({
  dict,
  onClick,
}: {
  onClick: () => void;
  dict: homeSectionDictTypes;
}) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 3 }}
      onClick={onClick}
      className="absolute bottom-0 md:bottom-2 left-1/2 transform -translate-x-1/2 px-5 py-3 text-xs md:text-[1.13vh] text-white rounded-md cursor-pointer transition-all"
    >
      <div className="absolute left-1/2 -translate-x-1/2 animate-bounce-slow">
        <AppIcon
          className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
          name="ArrowIcon"
          width="24px"
          height="24px"
        />
      </div>
      <div>{dict?.scrollTitle}</div>
    </motion.div>
  );
}
