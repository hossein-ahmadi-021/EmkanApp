import AppHeader from "@/components/header/appHeader";
import { LangProvider } from "@/layout/langProvider";
import ResponsiveLayout from "@/layout/responsiveLayout";
import { getDictionary } from "@/lib/dictionaries/dictionary";
import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";
import { headerSectionDictType } from "@/types/header/header.type";
import AppFooter from "@/components/footer/appFooter";

interface Props {
  children: React.ReactNode;
  lang: reagonTypes;
  dir: "rtl" | "ltr";
}

export async function MainLayout({ children, lang, dir }: Props) {
  const dict = (await getDictionary(lang, "header")) as headerSectionDictType;

  return (
    <LangProvider lang={lang}>
      <div lang={lang} dir={dir}>
        <ResponsiveLayout>
          <AppHeader lang={lang} dict={dict} dir={dir} />
          <main className="pt-20">{children}</main>
        </ResponsiveLayout>
        <AppFooter />
      </div>
    </LangProvider>
  );
}
