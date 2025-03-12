"use client";

import LandingSectionOne from "@/containers/landing/landingSectionOne";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Define opacity transitions for each section
  const section1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fade out as you scroll down
  const section2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]); // Fade in as you scroll down
  const section3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const section4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const section5 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: window.innerHeight, // Scroll by one viewport height
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="bg-red-700 overflow-y-hidden"
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory", // Enable vertical snap scrolling
        scrollBehavior: "smooth", // Smooth scrolling
      }}
    >
      {/* Section 1 */}
      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          opacity: section1,
          scrollSnapAlign: "start", // Snap to the start of the container
        }}
      >
        <LandingSectionOne rtl={rtl} dict={dict} />
        <button
          onClick={scrollToNextSection}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Scroll Down
        </button>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "hsl(60, 50%, 50%)",
          color: "white",
          fontSize: "2rem",
          opacity: section2,
          scrollSnapAlign: "start", // Snap to the start of the container
        }}
      >
        Section 2
        <button
          onClick={scrollToNextSection}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Scroll Down
        </button>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "hsl(120, 50%, 50%)",
          color: "white",
          fontSize: "2rem",
          opacity: section3,
          scrollSnapAlign: "start", // Snap to the start of the container
        }}
      >
        Section 3
        <button
          onClick={scrollToNextSection}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Scroll Down
        </button>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "hsl(180, 50%, 50%)",
          color: "white",
          fontSize: "2rem",
          opacity: section4,
          scrollSnapAlign: "start", // Snap to the start of the container
        }}
      >
        Section 4
        <button
          onClick={scrollToNextSection}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Scroll Down
        </button>
      </motion.section>

      {/* Section 5 */}
      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "hsl(240, 50%, 50%)",
          color: "white",
          fontSize: "2rem",
          opacity: section5,
          scrollSnapAlign: "start", // Snap to the start of the container
        }}
      >
        Section 5
      </motion.section>
    </motion.div>
  );
}
