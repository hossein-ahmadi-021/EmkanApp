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
  | "HalfCircleIcon"
  | "LocationIcon"
  | "EnergyIcon"
  | "ArrowToIcon"
  | "MiniHalfCircle"
  | "FireIcon"
  | "TransportationIcon"
  | "TravelingIcon"
  | "BuildingIcon"
  | "AgricultureIcon"
  | "MiningIcon"
  | "MoneyIcon"
  | "ManufacturingIcon"
  | "PharmacyIcon"
  | "HealthcareIcon"
  | "HumansIcon"
  | "EnvironmentalIcon"
  | "PlaningIcon"
  | "InvestmentIcon"
  | "RocketIcon"
  | "PhoneIcon"
  | "ArrowToX";

export interface IconType {
  width: string;
  height: string;
  className?: string;
}

export type IconColorsType = "white" | "primary" | "gold";
