import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";
import { motion } from "framer-motion";

interface Props {
  rtl: boolean;
  data: {
    title: string;
    subTitle: string;
    desc: string;
    btnTitle: string;
  };
}

export default function LandingInfoBox({ data, rtl }: Props) {
  const animateStart = {
    hidden: { opacity: 0, x: rtl ? 190 : -190 },
    visible: { opacity: 1, x: 0 },
  };

  const animateEnd = {
    hidden: { opacity: 0, x: rtl ? -190 : 190 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-5 mt-[12.38vh]">
      <div>
        <motion.div
          variants={animateStart}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <h1 className="mb-[15px] text-[7.3vh] line-clamp-1">{data.title}</h1>
          <h2 className="text-[6.09vh] line-clamp-2">{data.subTitle}</h2>
        </motion.div>
      </div>
      <div></div>
      <div>
        <motion.div
          variants={animateStart}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="bg-[#B2FFE26E] rounded-full h-[100px] w-[100px] flex justify-center items-center mt-10"
        >
          <AppIcon color="primary" name="PlayIcon" width="20px" height="20px" />
        </motion.div>
      </div>
      <div>
        <motion.div
          variants={animateEnd}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-justify"
        >
          <p className="border-t mb-6 pt-6 text-[1.91vh] leading-9">
            {data.desc}
          </p>
          <AppButton className="min-w-[326px]" icon="InsideIcon">
            {data.btnTitle}
          </AppButton>
        </motion.div>
      </div>
    </section>
  );
}
