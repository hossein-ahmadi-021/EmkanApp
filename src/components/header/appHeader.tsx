import AppIcon from "@/common/appIcon";

interface Props {}

export default function AppHeader(props: Props) {
  return (
    // bg-glass-white
    <header className="absolute top-2 rounded-full inset-x-0 w-full bg-red-700">
      <div className="p-4 w-full flex items-center justify-between h-20">
        <div className="flex items-center gap-[75px]">
          <div className="flex items-center gap-2.5">
            <AppIcon name="LogoIcon" width="44px" height="44px" />
            <div>
              <h1 className="text-xBase font-bold">گروه تجربه توسعه امکان</h1>
              <h4 className="text-tiny">Emkan Development Experience Group</h4>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <AppIcon name="HambergerIcon" width="30px" height="16px" />
            <div className="">توسعه سرزمینی</div>
            <div className="">راهبری اقتصادی</div>
            <div className="">شکل دهی آینده</div>
            <div className="">تمدن سازی</div>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <AppIcon name="SearchIcon" width="24px" height="24px" />
          <div className="flex items-center gap-1">
            <div className="text-sm">English</div>
            <AppIcon name="ReagonIcon" width="24px" height="24px" />
          </div>
          <div>btn</div>
        </div>
      </div>
    </header>
  );
}
