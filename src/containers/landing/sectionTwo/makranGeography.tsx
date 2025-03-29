import * as React from "react";
import Image from "next/image";
import makranStateImage from "@/assets/images/landing/markanLocation.svg";
import { motion } from "framer-motion";

type Props = {};

const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function MakranGeography(props: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={opacityVariant}
      transition={{ duration: 1 }}
    >
      <Image
        src={makranStateImage}
        alt="aa"
        quality={50}
        priority
        className={`object-contain absolute start-[23%] bottom-[9%]`}
        width={185}
        sizes="(max-width: 768px) 90vw, 67.04vh"
        style={{
          aspectRatio: 696 / 286,
          transform: "translateZ(0)",
        }}
      />
    </motion.div>
  );
}
