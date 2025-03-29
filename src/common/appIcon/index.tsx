import { IconColorsType, IconNames, IconType } from "@/types/public/icon.types";
import { iconList } from "@/common/appIcon/iconsList";
import { twMerge } from "tailwind-merge";

export default function AppIcon({
  name,
  color = "white",
  className,
  ...rest
}: { name: IconNames; color?: IconColorsType } & IconType) {
  const IconComponent = iconList[name];

  const theme = {
    white: "text-white",
    primary: "text-primary",
    gold: "text-gold",
  };

  const iconClassNames = twMerge(
    `transition-colors duration-700 ${theme[color]}`,
    className,
  );

  return <IconComponent className={iconClassNames} {...rest} />;
}
