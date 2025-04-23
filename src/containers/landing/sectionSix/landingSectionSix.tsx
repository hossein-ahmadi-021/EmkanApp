import AppButton from "@/common/appButton";
import AppIcon from "@/common/appIcon";
import ResponsiveLayout from "@/layout/responsiveLayout";

const LandingSectionSix = () => {
  return (
    <ResponsiveLayout className="w-full z-10 h-screen bg-white">
      <div className="md:px-17 flex flex-col items-center justify-center text-primary h-full">
        <div className="flex items-center gap-2 w-full ">
          <div className="bg-[#F8F4EC] px-[52px] py-[25px] w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <AppIcon
                  className="w-[35px] md:w-[44px]"
                  color="primary"
                  name="LogoIcon"
                  width="44px"
                  height="44px"
                />
                <div>
                  <h1 className="text-base md:text-[18px] font-semibold">
                    گروه تجربه توسعه امکان
                  </h1>
                  <h4 className="text-[12px] md:text-tiny">
                    Emkan Development Experience Group
                  </h4>
                </div>
              </div>
              <AppButton className="min-w-[200px]" icon="InsideIcon">
                درباره امکان
              </AppButton>
            </div>
            <p className="text-base font-light mt-4">
              ایران، با ظرفیت‌های گسترده ژئوپلیتیکی، اقتصادی و منابع انسانی،
              پتانسیل آن را دارد که در مسیر رهبری اقتصادی منطقه‌ای و جهانی قرار
              گیرد. ما در «گروه توسعه تجربه امکان» بر این باوریم که با رویکردی
              نوآورانه، می‌توان زیرساخت‌های توسعه‌ای کشور را تقویت و مسیر جدیدی
              برای پیشرفت اقتصادی ترسیم کرد. با ما همراه شوید تا مسیر تحول
              اقتصادی و سرزمینی ایران را هموار کنیم.
            </p>
          </div>
          <div className="bg-[#F8F4EC] px-[52px] py-[25px] w-full">
            <h4 className="text-2xl font-bold">
              همکاری، از همین‌جا آغاز می‌شود!
            </h4>
            <p className="text-base font-light mt-4">
              گروه تجربه توسعه امکان، پلی میان سرمایه‌گذاران، توسعه‌دهندگان و
              راهبران اقتصادی است. اگر به دنبال هم‌افزایی در پروژه‌های کلان،
              سرمایه‌گذاری راهبردی یا مشاوره توسعه هستید، با ما در ارتباط باشید.
            </p>
            <div className="flex items-center mt-4 gap-2">
              <AppButton
                parentClassName="w-full"
                className="!bg-[#F8F4EC] py-2 text-center"
                type="dashed"
              >
                <div className="flex items-center gap-2">
                  <AppIcon
                    color="primary"
                    width="20px"
                    height="20px"
                    name="PhoneIcon"
                  />
                  <div dir="ltr">[ ۰۲۱ ] ۲۲۸۰۶۵۵۵</div>
                  <AppIcon
                    color="primary"
                    width="20px"
                    height="20px"
                    name="ArrowToX"
                  />
                </div>
              </AppButton>
              <AppButton
                parentClassName="w-full"
                className="!bg-[#F8F4EC] py-2 text-center"
                type="dashed"
              >
                <div className="flex items-center gap-2">
                  <AppIcon
                    color="primary"
                    width="20px"
                    height="20px"
                    name="PhoneIcon"
                  />
                  <div dir="ltr">contact@emkan.world</div>
                  <AppIcon
                    color="primary"
                    width="20px"
                    height="20px"
                    name="ArrowToX"
                  />
                </div>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default LandingSectionSix;
