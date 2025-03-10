import { getDictionary } from "@/lib/dictionary";
import AppButton from "@/common/appButton";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/landing-bg-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 pt-36 text-white">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div>
            <h1 className="mb-[15px] text-[84px]">تحول اقتصادی ایران</h1>
            <h2 className="text-[70px]">
              آغاز عصر جدید توسعه و جایگاه جهانی شکوه‌مند
            </h2>
          </div>
          <div></div>
          <div>
            <div className="bg-[#B2FFE26E] rounded-full h-[100px] w-[100px] flex justify-center items-center">
              play
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-1-5xl">
              امکان، بستری برای توسعه متوازن، سرمایه‌گذاری هدفمند و بازتعریف
              جایگاه ایران در زنجیره ارزش جهانی است. با استراتژی‌های تحول‌آفرین،
              زیرساخت‌های پیشرفته و همکاری‌های بین‌المللی، آینده‌ای پایدار برای
              ایران می‌سازیم. آینده‌ای که در آن، ایران یکی از رهبران اقتصادی
              منطقه و جهان خواهد بود.
            </p>
            <AppButton className="mt-6" icon="InsideIcon">
              درباره مکران بیشتر بدانید
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
