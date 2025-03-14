import AppHeader from "@/components/header/appHeader";
import { LangProvider } from "@/layout/langProvider";
import ResponsiveLayout from "@/layout/responsiveLayout";
import { getDictionary } from "@/lib/dictionaries/dictionary";
import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";

interface Props {
  children: React.ReactNode;
  lang: reagonTypes;
  dir: "rtl" | "ltr";
}

export async function MainLayout({ children, lang, dir }: Props) {
  const dict = await getDictionary(lang, "header");

  return (
    <LangProvider lang={lang}>
      <div lang={lang} dir={dir}>
        <ResponsiveLayout>
          <div className="relative">
            <AppHeader dict={dict} dir={dir} />
          </div>
          <main className="pt-20">{children}</main>
        </ResponsiveLayout>
        {/*<footer className="bg-white h-20">*/}
        {/*  <div className="flex-1 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">*/}
        {/*    <span className="text-primary">footer</span>*/}
        {/*  </div>*/}
        {/*</footer>*/}
      </div>
    </LangProvider>
  );
}
