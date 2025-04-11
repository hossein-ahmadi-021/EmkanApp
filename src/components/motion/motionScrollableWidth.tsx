import { cn } from "@/lib/utils/classnames";
import { motion, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  isRTL?: boolean;
  hasBlur?: boolean;
  className?: string;
  childClassName?: string;
}

const clickTabsVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MotionScrollableWidth = ({
  children,
  isRTL = false,
  hasBlur = true,
  className,
  childClassName,
}: Props) => {
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
      className={cn(
        "overflow-x-auto w-full relative overflow-y-hidden",
        className
      )}
      dir={isRTL ? "rtl" : "ltr"}
      initial="hidden"
      animate="visible"
      variants={clickTabsVariant}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        ref={containerRef}
        className={`gap-[5px] flex items-center ${childClassName}`}
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
      {hasBlur && (
        <div className="h-[80px] w-[80px] blur-lg absolute end-[-30px] top-[-12px] bg-white"></div>
      )}
    </motion.div>
  );
};

export default MotionScrollableWidth;
