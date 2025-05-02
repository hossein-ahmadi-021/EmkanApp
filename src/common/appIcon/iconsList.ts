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
import EnergyIcon from "@/assets/icons/energy";
import ArrowToIcon from "@/assets/icons/arrowTo";
import MiniHalfCircle from "@/assets/icons/miniHalfCircle";
import FireIcon from "@/assets/icons/fire";
import TransportationIcon from "@/assets/icons/transportation";
import TravelingIcon from "@/assets/icons/traveling";
import BuildingIcon from "@/assets/icons/building";
import AgricultureIcon from "@/assets/icons/agriculture";
import MiningIcon from "@/assets/icons/mining";
import MoneyIcon from "@/assets/icons/money";
import ManufacturingIcon from "@/assets/icons/manufacturing";
import PharmacyIcon from "@/assets/icons/pharmacy";
import HealthcareIcon from "@/assets/icons/healthcare";
import HumansIcon from "@/assets/icons/humans";
import EnvironmentalIcon from "@/assets/icons/environmental";
import PlaningIcon from "@/assets/icons/planing";
import InvestmentIcon from "@/assets/icons/investment";
import RocketIcon from "@/assets/icons/rocket";   
import PhoneIcon from "@/assets/icons/phone";   
import ArrowToX from "@/assets/icons/arrowToX";   
import LocationDashedIcon from "@/assets/icons/locationDashed";
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
  EnergyIcon,
  ArrowToIcon,
  MiniHalfCircle,
  FireIcon,
  TransportationIcon,
  TravelingIcon,
  BuildingIcon,
  AgricultureIcon,
  MiningIcon,
  MoneyIcon,
  ManufacturingIcon,
  PharmacyIcon,
  HealthcareIcon,
  HumansIcon,
  EnvironmentalIcon,
  PlaningIcon,
  InvestmentIcon,
  RocketIcon,
  PhoneIcon,
  ArrowToX,
  LocationDashedIcon,
};
