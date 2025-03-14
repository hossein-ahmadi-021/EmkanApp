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
  | "CloseIcon";

export interface IconType {
  width: string;
  height: string;
  color?: string;
}

export type IconColorsType = "white" | "primary";
