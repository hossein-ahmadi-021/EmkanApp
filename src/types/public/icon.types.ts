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
  | "SymbolIcon";

export interface IconType {
  width: string;
  height: string;
  color?: string;
}

export type IconColorsType = "white" | "primary";
