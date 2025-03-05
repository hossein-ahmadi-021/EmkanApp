import { IconColorsType, IconNames, IconType } from "@/types/public/icon.types";
import { colors, iconList } from "@/common/appIcon/iconsList";

export default function AppIcon({
  name,
  color = "white",
  ...rest
}: { name: IconNames; color?: IconColorsType } & IconType) {
  const IconComponent = iconList[name];
  const iconColor = colors[color];

  return <IconComponent color={iconColor} {...rest} />;
}
