import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import AppIcon from "@/common/appIcon";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
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

export default function AzadGeography({ activeId, setActiveConfig }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={opacityVariant}
      transition={{ duration: 2 }}
    >
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[21.7%]"
        title="ماکو"
        activeId={activeId}
        pointId={1}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[25.5%] top-6"
        title="ارس"
        activeId={activeId}
        pointId={2}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[29.9%] top-2"
        title="اردبیل"
        activeId={activeId}
        pointId={3}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[34%] top-19"
        title="بندرانزلی"
        activeId={activeId}
        pointId={4}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[41%] top-26"
        title="مازندران"
        activeId={activeId}
        pointId={5}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[47%] top-22"
        title="اینچه برون"
        activeId={activeId}
        pointId={6}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[65.5%] top-28"
        title="سرخس"
        activeId={activeId}
        pointId={7}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[65.5%] top-40"
        title="دوغارون"
        activeId={activeId}
        pointId={8}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[68.5%] top-70"
        title="سیستان"
        activeId={activeId}
        pointId={13}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[37.4%] top-35"
        title="فرودگاه امام خمینی"
        activeId={activeId}
        pointId={9}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[23.2%] top-29"
        title="بانه و مریوان"
        activeId={activeId}
        pointId={10}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[23.1%] top-40"
        title="قصر شیرین"
        activeId={activeId}
        pointId={11}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[25.5%] top-52"
        title="مهران"
        activeId={activeId}
        pointId={12}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[33.8%] top-73"
        title="اروند"
        activeId={activeId}
        pointId={14}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[40.4%] top-89"
        title="بوشهر"
        activeId={activeId}
        pointId={15}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[47%] top-105"
        title="کیش"
        activeId={activeId}
        pointId={16}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[53.5%] top-103"
        title="قشم"
        activeId={activeId}
        pointId={17}
      />
      <LocationPoint
        setActiveConfig={setActiveConfig}
        className="end-[66.6%] top-113"
        title="چابهار"
        activeId={activeId}
        pointId={18}
      />
    </motion.div>
  );
}
