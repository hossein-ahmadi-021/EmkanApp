import AppHeader from "@/components/header/appHeader";

interface Props {
  children: React.ReactNode;
  lang: string;
  dir: "rtl" | "ltr";
}

export function MainLayout({ children, lang, dir }: Props) {
  return (
    <div lang={lang} dir={dir}>
      <div className="flex-1 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <AppHeader />
        <main className="h-screen">{children}</main>
      </div>
      <footer className="bg-white h-20">
        <div className="flex-1 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <span className="text-red-500">footer</span>
        </div>
      </footer>
    </div>
  );
}
