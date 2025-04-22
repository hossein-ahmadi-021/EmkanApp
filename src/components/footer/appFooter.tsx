"use client";

import { usePathname } from "next/navigation";
import { existRoutes } from "@/types/public/layout.type";
import { footerRouteOptions } from "./footerRouteOptions";

const AppFooter = () => {
  const pathname = usePathname();

  const pathSegments = pathname?.split("/").filter(Boolean) || [];
  const routePath = `/${pathSegments.slice(1).join("/")}` as existRoutes;

  // Check if the current route exists in footerRouteOptions
  const footerOptions = footerRouteOptions[routePath];

  // If the route doesn't exist in footerRouteOptions, don't render the footer
  if (!footerOptions) {
    return null;
  }

  return (
    <footer className="h-20 bg-red-500">
      <div className="flex-1 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <span className="text-primary">footer</span>
      </div>
    </footer>
  );
};

export default AppFooter;
