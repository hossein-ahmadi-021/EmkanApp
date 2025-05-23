import * as React from "react";
import { Dispatch, SetStateAction } from "react";
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
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[21.5%] max-[1536px]:end-[15%] max-[1280px]:end-[6%] top-2 max-[768px]:end-[15%] max-[768px]:top-1"
        title="ماکو"
        activeId={activeId}
        pointId={1}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[25.5%] max-[1536px]:end-[20%] max-[1280px]:end-[13%] top-6 max-[768px]:end-[20%] max-[768px]:top-3"
        title="ارس"
        activeId={activeId}
        pointId={2}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[29.9%] max-[1536px]:end-[25%] max-[1280px]:end-[19%] top-2 max-[768px]:end-[24.5%] max-[768px]:top-1"
        title="اردبیل"
        activeId={activeId}
        pointId={3}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[34%] max-[1536px]:end-[30.5%] max-[1280px]:end-[26%] top-19 max-[768px]:end-[30%] max-[768px]:top-10"
        title="بندرانزلی"
        activeId={activeId}
        pointId={4}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[41%] top-26 max-[768px]:end-[39%] max-[768px]:top-14"
        title="مازندران"
        activeId={activeId}
        pointId={5}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[47%] top-22 max-[768px]:end-[46%] max-[768px]:top-13"
        title="اینچه برون"
        activeId={activeId}
        pointId={6}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[65.5%] max-[1536px]:end-[69.5%] max-[1280px]:end-[74%] top-28 max-[768px]:end-[68.2%] max-[768px]:top-15"
        title="سرخس"
        activeId={activeId}
        pointId={7}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[65.5%] max-[1536px]:end-[68.8%] max-[1280px]:end-[73%] top-40 max-[768px]:end-[67.8%] max-[768px]:top-21.5"
        title="دوغارون"
        activeId={activeId}
        pointId={8}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[68.5%] max-[1536px]:end-[72.5%] max-[1280px]:end-[78%] top-70 max-[768px]:end-[71.5%] max-[768px]:top-38"
        title="سیستان"
        activeId={activeId}
        pointId={13}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[37.4%] max-[1536px]:end-[34%] max-[1280px]:end-[30%] top-35 max-[768px]:end-[32%] max-[768px]:top-19.5"
        title="فرودگاه امام خمینی"
        activeId={activeId}
        pointId={9}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[23.2%] max-[1536px]:end-[17.5%] max-[1280px]:end-[10%] top-29 max-[768px]:end-[15%] max-[768px]:top-15.5"
        title="بانه و مریوان"
        activeId={activeId}
        pointId={10}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[23.1%] max-[1536px]:end-[17%] max-[1280px]:end-[9.5%] top-40 max-[768px]:end-[16%] max-[768px]:top-22"
        title="قصر شیرین"
        activeId={activeId}
        pointId={11}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[25.5%] max-[1536px]:end-[20%] max-[1280px]:end-[13%] top-52 max-[768px]:end-[19%] max-[768px]:top-28.5"
        title="مهران"
        activeId={activeId}
        pointId={12}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[33.8%] max-[1536px]:end-[30%] max-[1280px]:end-[25%] top-73 max-[768px]:end-[30%] max-[768px]:top-40"
        title="اروند"
        activeId={activeId}
        pointId={14}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[40.4%] max-[1536px]:end-[38%] max-[1280px]:end-[34%] top-89 max-[768px]:end-[37.3%] max-[768px]:top-48.5"
        title="بوشهر"
        activeId={activeId}
        pointId={15}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[47%] top-105 max-[768px]:end-[46.5%] max-[768px]:top-58.5"
        title="کیش"
        activeId={activeId}
        pointId={16}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[53.5%] top-103 max-[768px]:end-[53%] max-[768px]:top-57"
        title="قشم"
        activeId={activeId}
        pointId={17}
      />
      <LocationPoint
        iconClassName="w-[1.7vh] h-[1.7vh]"
        setActiveConfig={setActiveConfig}
        className="end-[66.6%] max-[1536px]:end-[71%] max-[1280px]:end-[77%] top-113 max-[768px]:end-[70%] max-[768px]:top-62"
        title="چابهار"
        activeId={activeId}
        pointId={18}
      />
    </motion.div>
  );
}
