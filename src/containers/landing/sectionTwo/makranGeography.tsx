import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sistanGold from "@/assets/images/landing/SistanGold.svg";
import sistanPrimary from "@/assets/images/landing/SistanPrimary.svg";
import hormozGold from "@/assets/images/landing/HormozganGold.svg";
import hormozPrimary from "@/assets/images/landing/HormozganPrimary.svg";

const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type LocationKey = "makran" | "azad" | "islands";

interface Props {
  activeTab: number;
  setActiveConfig: Dispatch<
    SetStateAction<{ location: LocationKey; activeLatLng: number }>
  >;
}

export default function MakranGeography({ activeTab, setActiveConfig }: Props) {
  return (
    <>
      <motion.div
        onClick={() =>
          setActiveConfig({
            location: "makran",
            activeLatLng: 2,
          })
        }
        initial="hidden"
        animate={activeTab === 1 ? "visible" : "hidden"}
        variants={opacityVariant}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={sistanGold}
          alt="Makran geographical location"
          quality={50}
          priority
          className="object-contain absolute start-[20.27%] bottom-[9.19%] z-10 select-none"
          width={185}
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 696 / 286,
            transform: "translateZ(0)",
          }}
        />
      </motion.div>
      <motion.div
        onClick={() =>
          setActiveConfig({
            location: "makran",
            activeLatLng: 2,
          })
        }
        initial="hidden"
        animate={activeTab === 1 ? "hidden" : "visible"}
        variants={opacityVariant}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={sistanPrimary}
          alt="Makran geographical location"
          quality={50}
          priority
          className="object-contain absolute start-[20.27%] bottom-[9.19%] select-none"
          width={185}
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 696 / 286,
            transform: "translateZ(0)",
          }}
        />
      </motion.div>
      <motion.div
        onClick={() =>
          setActiveConfig({
            location: "makran",
            activeLatLng: 1,
          })
        }
        initial="hidden"
        animate={activeTab === 1 ? "hidden" : "visible"}
        variants={opacityVariant}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={hormozGold}
          alt="Makran geographical location"
          quality={50}
          priority
          className="object-contain absolute start-[31.1904%] bottom-[10.245%] z-10 select-none"
          width={154}
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 696 / 286,
            transform: "translateZ(0)",
          }}
        />
      </motion.div>
      <motion.div
        onClick={() =>
          setActiveConfig({
            location: "makran",
            activeLatLng: 1,
          })
        }
        initial="hidden"
        animate={activeTab === 1 ? "visible" : "hidden"}
        variants={opacityVariant}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={hormozPrimary}
          alt="Makran geographical location"
          quality={50}
          priority
          className="object-contain absolute start-[31.1904%] bottom-[10.245%] select-none"
          width={154}
          sizes="(max-width: 768px) 90vw, 67.04vh"
          style={{
            aspectRatio: 696 / 286,
            transform: "translateZ(0)",
          }}
        />
      </motion.div>
    </>
  );
}
