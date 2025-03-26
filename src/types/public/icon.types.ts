export type IconNames =
  | "LogoIcon"
  | "HambergerIcon"
  | "SearchIcon"
  | "ReagonIcon"
  | "InsideIcon"
  | "PlayIcon"
  | "PauseIcon"
  | "MuteIcon"
  | "VolumeIcon"
  | "SymbolIcon"
  | "ArrowIcon"
  | "CloseIcon"
  | "HalfCircleIcon";

export interface IconType {
  width: string;
  height: string;
  className?: string;
}

export type IconColorsType = "white" | "primary";
