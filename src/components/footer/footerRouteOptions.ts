import { existRoutes, FooterRouteAccessType } from "@/types/public/layout.type";

type OptionalFooterRoutes = Partial<Record<existRoutes, FooterRouteAccessType>>;

export const footerRouteOptions: OptionalFooterRoutes = {
  "/contactUs": {
    type: "main",
    theme: "primary"
  },
};
