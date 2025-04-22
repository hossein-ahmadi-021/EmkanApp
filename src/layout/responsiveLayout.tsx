import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ResponsiveLayout({ children, className }: Props) {
  const layoutClasses = twMerge(
    "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    className
  );

  return <div className={layoutClasses}>{children}</div>;
}
