import { ReactElement } from "react";
import { IconNames, IconType } from "@/types/public/icon.types";
import LogoIcon from "@/assets/icons/logo";
import HambergerIcon from "@/assets/icons/hamberger";
import SearchIcon from "@/assets/icons/search";
import ReagonIcon from "@/assets/icons/reagon";
import InsideIcon from "@/assets/icons/inside";
import PauseIcon from "@/assets/icons/pause";
import MuteIcon from "@/assets/icons/mute";
import PlayIcon from "@/assets/icons/play";
import VolumeIcon from "@/assets/icons/volume";
import SymbolIcon from "@/assets/icons/symbol";
import ArrowIcon from "@/assets/icons/arrow";
import CloseIcon from "@/assets/icons/close";
import HalfCircleIcon from "@/assets/icons/halfCircle";
import LocationIcon from "@/assets/icons/location";

export const iconList: Record<
  IconNames,
  ({ width, height, className }: IconType) => ReactElement
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
  SymbolIcon,
  ArrowIcon,
  CloseIcon,
  HalfCircleIcon,
  LocationIcon,
};
