import { ReactElement } from "react";
import { IconColorsType, IconNames, IconType } from "@/types/public/icon.types";
import LogoIcon from "@/assets/icons/logo";
import HambergerIcon from "@/assets/icons/hamberger";
import SearchIcon from "@/assets/icons/search";
import ReagonIcon from "@/assets/icons/reagon";

export const iconList: Record<
  IconNames,
  ({ width, height, color }: IconType) => ReactElement
> = {
  LogoIcon,
  HambergerIcon,
  SearchIcon,
  ReagonIcon,
};

export const colors: Record<IconColorsType, string> = {
  white: "#fff",
  primary: "#104946",
};
