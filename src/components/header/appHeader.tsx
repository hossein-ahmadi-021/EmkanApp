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

interface Props {
  dir: "rtl" | "ltr";
}

export default function AppHeader({ dir }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isRtl = dir === "rtl";
  const variants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };

  const switchLanguage = (newLang: reagonTypes) => {
    const localeRegex = new RegExp(`^\\/(${locales.join("|")})`);
    const newPath = pathname.replace(localeRegex, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <Dialog>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.7 }}
        className="absolute top-2 rounded-full inset-x-0 w-full bg-glass-white backdrop-blur text-white whitespace-nowrap"
      >
        <div className="p-4 w-full flex items-center justify-between h-20">
          <div className="flex items-center gap-[75px]">
            <div className="flex items-center gap-2.5">
              <AppIcon name="LogoIcon" width="44px" height="44px" />
              <div>
                <h1 className="text-lg font-bold">گروه تجربه توسعه امکان</h1>
                <h4 className="text-tiny">
                  Emkan Development Experience Group
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <AppIcon name="HambergerIcon" width="30px" height="16px" />
              <div className="cursor-pointer">توسعه سرزمینی</div>
              <div className="cursor-pointer">راهبری اقتصادی</div>
              <div className="cursor-pointer">شکل دهی آینده</div>
              <div className="cursor-pointer">تمدن سازی</div>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <AppIcon name="SearchIcon" width="24px" height="24px" />
            <DialogTrigger className="flex items-center gap-1 cursor-pointer">
              <div className="text-sm">English</div>
              <AppIcon name="ReagonIcon" width="24px" height="24px" />
            </DialogTrigger>
            <AppButton icon="InsideIcon">تماس با امکان</AppButton>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={`text-base`}>
              زبان مورد نظر را انتخاب کنید
            </DialogTitle>
          </DialogHeader>
          <div className={`flex gap-2 text-sm ${isRtl && "flex-row-reverse"}`}>
            <div
              onClick={() => switchLanguage("en")}
              className="border py-1 px-2 rounded-md cursor-pointer"
            >
              English
            </div>
            <div
              onClick={() => switchLanguage("fa")}
              className="border py-1 px-2 rounded-md cursor-pointer"
            >
              فارسی
            </div>
          </div>
        </DialogContent>
      </motion.header>
    </Dialog>
  );
}
