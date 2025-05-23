export type existRoutes = "/" | "/contactUs";
export type HeaderOptionType = "";

export interface HeaderRouteAccessType {
  type: "main" | "sub";
  theme: "white" | "primary";
  onBack: () => void;
  options: HeaderOptionType[];
}

export interface FooterRouteAccessType {
  type: "main" | "sub";
  theme: "white" | "primary";
}
