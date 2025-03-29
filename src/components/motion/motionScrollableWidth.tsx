import { motion, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  isRTL?: boolean;
}

const MotionScrollableWidth = ({ children, isRTL = false }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraint, setConstraint] = useState(0);

  useEffect(() => {
    const updateConstraint = () => {
      if (!containerRef.current) return 0;

      const { scrollWidth, clientWidth } = containerRef.current;
      return scrollWidth - clientWidth;
    };

    const timeoutId = setTimeout(() => {
      const newConstraint = updateConstraint();
      setConstraint(isRTL ? newConstraint : -newConstraint);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [children, isRTL]);

  return (
    <motion.div
      className="overflow-x-auto w-full relative overflow-y-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        ref={containerRef}
        className="gap-[5px] flex items-center"
        drag="x"
        dragConstraints={{
          right: isRTL ? constraint : 0,
          left: isRTL ? 0 : constraint,
        }}
        dragElastic={0.1}
        style={{ x }}
        onDragEnd={() => {
          const currentX = x.get();
          const [minX, maxX] = isRTL ? [0, constraint] : [constraint, 0];

          if (currentX < minX) x.set(minX);
          if (currentX > maxX) x.set(maxX);
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
      <div className="h-[80px] w-[80px] blur-lg absolute end-[-30px] top-[-12] bg-white"></div>
    </motion.div>
  );
};

export default MotionScrollableWidth;
