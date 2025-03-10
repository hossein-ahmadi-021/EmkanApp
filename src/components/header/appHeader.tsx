import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";

interface Props {}

export default function AppHeader(props: Props) {
  return (
    <header className="absolute top-2 rounded-full inset-x-0 w-full bg-glass-white backdrop-blur text-white whitespace-nowrap">
      <div className="p-4 w-full flex items-center justify-between h-20">
        <div className="flex items-center gap-[75px]">
          <div className="flex items-center gap-2.5">
            <AppIcon name="LogoIcon" width="44px" height="44px" />
            <div>
              <h1 className="text-lg font-bold">گروه تجربه توسعه امکان</h1>
              <h4 className="text-tiny">Emkan Development Experience Group</h4>
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
          <div className="flex items-center gap-1">
            <div className="text-sm">English</div>
            <AppIcon name="ReagonIcon" width="24px" height="24px" />
          </div>
          <AppButton icon="InsideIcon">تماس با امکان</AppButton>
        </div>
      </div>
    </header>
  );
}
