import * as React from "react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import LocationPoint from "@/containers/landing/sectionTwo/locationPoint";

interface Props {
  activeId: number;
  setActiveConfig: Dispatch<
    SetStateAction<{
      location: "makran" | "azad" | "islands";
      activeLatLng: number;
    }>
  >;
}

const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function IslandsGeography({ activeId, setActiveConfig }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={opacityVariant}
      transition={{ duration: 1 }}
    >
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[37%] max-[1536px]:end-[34%] max-[1280px]:end-[30%] top-88"
        title="خارگ"
        activeId={activeId}
        pointId={12}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[38.6%] max-[1536px]:end-[36%] max-[1280px]:end-[32.5%] top-92"
        title="صدرا"
        activeId={activeId}
        pointId={11}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[41.5%] max-[1536px]:end-[39.5%] max-[1280px]:end-[37.5%] top-100"
        title="لاوان"
        activeId={activeId}
        pointId={10}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[43%] max-[1536px]:end-[41.5%] max-[1280px]:end-[40%] top-103"
        title="هندورابی"
        activeId={activeId}
        pointId={9}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[45.5%] max-[1536px]:end-[44.5%] max-[1280px]:end-[43.5%] top-106"
        title="کیش"
        activeId={activeId}
        pointId={8}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[47.2%] top-108"
        title="فارو"
        activeId={activeId}
        pointId={7}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[47.6%] top-112.5"
        title="سیری"
        activeId={activeId}
        pointId={6}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[49.2%] top-110"
        title="بوموسی"
        activeId={activeId}
        pointId={5}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[53%] top-110"
        title="هنگام"
        activeId={activeId}
        pointId={4}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[54.3%] top-107"
        title="قشم"
        activeId={activeId}
        pointId={1}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[55.8%] top-109"
        title="لارک"
        activeId={activeId}
        pointId={3}
      />
      <LocationPoint
        location="islands"
        size="small"
        setActiveConfig={setActiveConfig}
        className="end-[57%] top-106"
        title="هرمز"
        activeId={activeId}
        pointId={2}
      />
    </motion.div>
  );
}
