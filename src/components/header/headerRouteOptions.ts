import { router } from "next/client";
import { existRoutes, HeaderRouteAccessType } from "@/types/public/header.type";

export const headerRouteOptions: Record<existRoutes, HeaderRouteAccessType> = {
  "/": {
    type: "main",
    theme: "white",
    onBack: () => {
      router.back();
    },
    options: [],
  },
  "/about": {
    type: "main",
    theme: "primary",
    onBack: () => {
      router.back();
    },
    options: [],
  },
};
