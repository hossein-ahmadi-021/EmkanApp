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

interface MapImageProps {
  src: string;
  alt: string;
  position: {
    start: string;
    bottom: string;
  };
  size: {
    width: string;
    height: string;
  };
  isActive: boolean;
  onClick: () => void;
  zIndex?: number;
}

const MapImage: React.FC<MapImageProps> = ({
  src,
  alt,
  position,
  size,
  isActive,
  onClick,
  zIndex = 0,
}) => (
  <motion.div
    onClick={onClick}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
    variants={opacityVariant}
    transition={{ duration: 0.6 }}
    className="absolute w-full h-full"
  >
    <div
      className={`absolute ${position.start} ${position.bottom} ${
        zIndex ? "z-10" : ""
      } ${size.width} ${size.height}`}
    >
      <Image
        src={src}
        alt={alt}
        quality={50}
        priority
        className="object-contain select-none"
        fill
        sizes="(max-width: 768px) 90vw, 67.04vh"
        style={{
          transform: "translateZ(0)",
        }}
      />
    </div>
  </motion.div>
);

export default function MakranGeography({ activeTab, setActiveConfig }: Props) {
  const handleSistanClick = () =>
    setActiveConfig({
      location: "makran",
      activeLatLng: 2,
    });

  const handleHormozClick = () =>
    setActiveConfig({
      location: "makran",
      activeLatLng: 1,
    });

  const sistanPosition = {
    start: "start-[23.2%]",
    bottom: "bottom-[-1.1%]",
  };

  const hormozPosition = {
    start: "start-[35.80%]",
    bottom: "bottom-[-1.2%]",
  };

  const imageSize = {
    width: "w-[14%]",
    height: "h-[34.5%]",
  };

  const hormozSize = {
    width: "w-[7.1%]",
    height: "h-[34.5%]",
  };

  return (
    <>
      <MapImage
        src={sistanGold}
        alt="Sistan geographical location"
        position={sistanPosition}
        size={imageSize}
        isActive={activeTab === 1}
        onClick={handleSistanClick}
        zIndex={10}
      />
      <MapImage
        src={sistanPrimary}
        alt="Sistan geographical location"
        position={sistanPosition}
        size={imageSize}
        isActive={activeTab !== 1}
        onClick={handleSistanClick}
      />
      <MapImage
        src={hormozGold}
        alt="Hormoz geographical location"
        position={hormozPosition}
        size={hormozSize}
        isActive={activeTab !== 1}
        onClick={handleHormozClick}
        zIndex={10}
      />
      <MapImage
        src={hormozPrimary}
        alt="Hormoz geographical location"
        position={hormozPosition}
        size={hormozSize}
        isActive={activeTab === 1}
        onClick={handleHormozClick}
      />
    </>
  );
}
