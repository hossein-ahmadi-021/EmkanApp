export type existRoutes = "/" | "/about";
export type HeaderOptionType = "";

export interface HeaderRouteAccessType {
  type: "main" | "sub";
  theme: "white" | "primary";
  onBack: () => void;
  options: HeaderOptionType[];
}
