import AppIcon from "@/common/appIcon";
import AppButton from "@/common/appButton";

interface Props {
  data: {
    title: string;
    subTitle: string;
    desc: string;
  };
}

export default function LandingInfoBox({ data }: Props) {
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-4">
      <div>
        <h1 className="mb-[15px] text-[84px]">{data.title}</h1>
        <h2 className="text-[70px] font-yekan">{data.subTitle}</h2>
      </div>
      <div></div>
      <div>
        <div className="bg-[#B2FFE26E] rounded-full h-[100px] w-[100px] flex justify-center items-center mt-14">
          <AppIcon color="primary" name="PlayIcon" width="20px" height="20px" />
        </div>
      </div>
      <div className="border-t pt-6">
        <p className="text-1-5xl">{data.desc}</p>
        <AppButton className="mt-6 w-[326px]" icon="InsideIcon">
          درباره مکران بیشتر بدانید
        </AppButton>
      </div>
    </section>
  );
}
