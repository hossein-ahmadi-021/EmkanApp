import { ReactElement } from "react";
import { IconColorsType, IconNames, IconType } from "@/types/public/icon.types";
import LogoIcon from "@/assets/icons/logo";
import HambergerIcon from "@/assets/icons/hamberger";
import SearchIcon from "@/assets/icons/search";
import ReagonIcon from "@/assets/icons/reagon";
import InsideIcon from "@/assets/icons/inside";
import PauseIcon from "@/assets/icons/pause";
import MuteIcon from "@/assets/icons/mute";
import PlayIcon from "@/assets/icons/play";
import VolumeIcon from "@/assets/icons/volume";

export const iconList: Record<
  IconNames,
  ({ width, height, color }: IconType) => ReactElement
> = {
  LogoIcon,
  HambergerIcon,
  SearchIcon,
  ReagonIcon,
  InsideIcon,
  PlayIcon,
  PauseIcon,
  MuteIcon,
  VolumeIcon,
};

export const colors: Record<IconColorsType, string> = {
  white: "#fff",
  primary: "#104946",
};
