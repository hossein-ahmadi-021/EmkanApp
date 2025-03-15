import { IconColorsType, IconNames, IconType } from "@/types/public/icon.types";
import { iconList } from "@/common/appIcon/iconsList";

export default function AppIcon({
  name,
  color = "white",
  className,
  ...rest
}: { name: IconNames; color?: IconColorsType } & IconType) {
  const IconComponent = iconList[name];

  return (
    <IconComponent
      className={`transition-colors duration-700 text-${color} ${className}`}
      {...rest}
    />
  );
}
