"use client";
import { motion } from "framer-motion";
import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";
import { locales } from "@/lib/constants/public";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { headerRouteOptions } from "@/components/header/headerRouteOptions";
import { existRoutes } from "@/types/public/header.type";
import { clsx } from "clsx";
import { useHeaderStore } from "@/store/headerStore";
import { headerSectionDictType } from "@/types/header/header.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  dir: "rtl" | "ltr";
  lang: reagonTypes;
  dict: headerSectionDictType;
}

export default function AppHeader({ dict, dir, lang }: Props) {
  const { importantColor } = useHeaderStore();
  const router = useRouter();
  const pathname = usePathname();
  const isRtl = dir === "rtl";

  const pathSegments = pathname?.split("/").filter(Boolean) || [];
  const currentLang = pathSegments[0] || "en";
  const routePath = `/${pathSegments.slice(1).join("/")}` as existRoutes;

  const isValidRoute = (path: string) => {
    return Object.keys(headerRouteOptions).includes(path);
  };

  const switchLanguage = (newLang: reagonTypes) => {
    const basePath = routePath === "/" ? "" : routePath;
    const targetPath = `/${newLang}${basePath}`;
    if (isValidRoute(routePath)) {
      router.push(targetPath);
    } else {
      router.push(`/${newLang}`);
    }
  };

  //themes
  const headerOptions = headerRouteOptions[routePath];
  const isPrimary =
    headerOptions.theme === "primary" || importantColor == "primary";
  const isSub = headerOptions.type === "sub";
  const headerClasses = twMerge(
    "header-transition absolute inset-x-0 w-full backdrop-blur whitespace-nowrap",
    clsx({
      "top-2 rounded-full": headerOptions.type === "main",
      "bg-white border-b": headerOptions.type === "sub",
      ...(headerOptions?.type === "main" && !importantColor
        ? {
            "bg-[#13595733] text-primary": headerOptions?.theme === "primary",
            "bg-[#FDFBF533] text-white": headerOptions?.theme === "white",
          }
        : {
            "bg-[#13595733] text-primary": importantColor === "primary",
            "bg-[#FDFBF533] text-white": importantColor === "white",
          }),
    })
  );

  const variants = {
    hidden: { y: "-110%" },
    visible: { y: 0 },
  };

  return (
    <header className="relative">
      <Dialog>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.7 }}
          className={headerClasses}
        >
          <div className="p-4 w-full flex items-center justify-between h-20 duration-700">
            <div className="flex items-center flex-row-reverse md:flex-row">
              {isSub && (
                <AppIcon
                  color={isPrimary ? "primary" : "white"}
                  name="CloseIcon"
                  width="32px"
                  height="32px"
                />
              )}
              <div
                onClick={() => router.push(`/${lang}`)}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <AppIcon
                  color={isPrimary ? "primary" : "white"}
                  name="LogoIcon"
                  width="44px"
                  height="44px"
                />
                <div>
                  <h1 className="text-lg font-semibold">{dict.company}</h1>
                  <h4 className="text-tiny">
                    Emkan Development Experience Group
                  </h4>
                </div>
              </div>
              {!isSub && (
                <div className="md:ms-[74px] me-9">
                  <div className="xl:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <AppIcon
                          color={isPrimary ? "primary" : "white"}
                          name="HambergerIcon"
                          width="32px"
                          height="32px"
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        {dict.links.map((item) => {
                          const fullPath = `/${currentLang}${item.link}`;
                          return (
                            <DropdownMenuItem
                              className="text-start"
                              key={item.id}
                            >
                              <Link
                                href={fullPath}
                                className={twMerge("cursor-pointer")}
                              >
                                {item.name}
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-10 hidden xl:flex">
                    {dict.links.map((item) => {
                      const fullPath = `/${currentLang}${item.link}`;
                      return (
                        <Link
                          key={item.id}
                          href={fullPath}
                          className={twMerge("cursor-pointer")}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-[30px] hidden md:flex">
              <AppIcon
                color={isPrimary ? "primary" : "white"}
                name="SearchIcon"
                width="24px"
                height="24px"
              />
              <DialogTrigger className="flex items-center gap-1 cursor-pointer">
                <div className="text-sm">{langNames[lang]}</div>
                <AppIcon
                  color={isPrimary ? "primary" : "white"}
                  name="ReagonIcon"
                  width="24px"
                  height="24px"
                />
              </DialogTrigger>
              <AppButton
                onClick={() => router.push(`/${lang}/contactUs`)}
                icon="InsideIcon"
              >
                {dict.contactUs}
              </AppButton>
            </div>
          </div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className={`text-base`}>
                {dict.modalTitle}
              </DialogTitle>
            </DialogHeader>
            <div
              className={`flex gap-2 text-sm ${isRtl && "flex-row-reverse"}`}
            >
              {locales.map((locale) => (
                <div
                  key={locale}
                  onClick={() => switchLanguage(locale as reagonTypes)}
                  className={twMerge(
                    "border py-1 px-2 rounded-md cursor-pointer",
                    currentLang === locale && "bg-blue-500 text-white"
                  )}
                >
                  {langNames[locale as reagonTypes]}
                </div>
              ))}
            </div>
          </DialogContent>
        </motion.div>
      </Dialog>
    </header>
  );
}

const langNames = {
  en: "English",
  fa: "فارسی",
};
