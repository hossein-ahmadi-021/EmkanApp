import { router } from "next/client";
import { existRoutes, HeaderRouteAccessType } from "@/types/public/layout.type";

type OptionalHeaderRoutes = Partial<Record<existRoutes, HeaderRouteAccessType>>;

export const headerRouteOptions: OptionalHeaderRoutes = {
  "/": {
    type: "main",
    theme: "white",
    onBack: () => {
      router.back();
    },
    options: [],
  },
  "/contactUs": {
    type: "main",
    theme: "primary",
    onBack: () => {
      router.back();
    },
    options: [],
  },
};
