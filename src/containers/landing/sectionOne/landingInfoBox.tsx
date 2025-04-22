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
    <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-0 md:gap-y-5 p-3 md:p-0 font-normal">
      <motion.div
        variants={animateStart}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
      >
        <h1 className="md:mb-[15px] text-[5vh] md:text-[7.3vh] text-nowrap">
          {data.title}
        </h1>
        <h2 className="text-[5vh] md:text-[6.09vh]">{data.subTitle}</h2>
      </motion.div>
      <div className="md:flex hidden"></div>
      <div>
        <motion.div
          variants={animateStart}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="bg-[#B2FFE26E] rounded-full h-[70px] w-[70px] md:h-[100px] md:w-[100px] flex justify-center items-center md:mt-10 md:mb-0 my-4"
        >
          <AppIcon
            className="w-[15px] md:w-[20px]"
            color="primary"
            name="PlayIcon"
            width="20px"
            height="20px"
          />
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
          <p className="border-t mb-2 md:mb-6 pt-2 md:pt-6 text-[1.91vh] leading-9">
            {data.desc}
          </p>
          <AppButton
            className="min-w-[326px] text-[2.1vh] md:text-lg"
            icon="InsideIcon"
            iconClass="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
          >
            {data.btnTitle}
          </AppButton>
        </motion.div>
      </div>
    </section>
  );
}
