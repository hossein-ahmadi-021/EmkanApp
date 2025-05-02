import AppButton from "@/common/appButton";
import AppIcon from "@/common/appIcon";
import AppInput from "@/common/appInput";
import ResponsiveLayout from "@/layout/responsiveLayout";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";

const LandingSectionSix = () => {
  const [search, setSearch] = useState("");

  return (
    <ResponsiveLayout className="w-full z-10 h-screen bg-white  pt-18">
      <div className="md:px-[1.48vh] flex flex-col items-center justify-center text-primary h-full">
        {/* part one */}
        <div className="flex w-full items-stretch gap-8">
          <div className="bg-[#F8F4EC] px-[4.52vh] py-[25px] w-[55%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 cursor-pointer">
                <AppIcon
                  className="w-[3.04vh] md:w-[4.9vh]"
                  color="primary"
                  name="LogoIcon"
                  width="44px"
                  height="44px"
                />
                <div>
                  <h1 className="text-[1.39vh] md:text-[2.3vh] font-semibold">
                    گروه تجربه توسعه امکان
                  </h1>
                  <h4 className="text-[1.04vh] md:text-[1.3vh]">
                    Emkan Development Experience Group
                  </h4>
                </div>
              </div>
              <AppButton
                parentClassName="w-full max-w-[267px]"
                className="text-[2vh] h-[5.39vh]"
                iconClass="w-[5.5vh]"
                icon="InsideIcon"
              >
                درباره امکان
              </AppButton>
            </div>
            <p className="text-[1.7vh] font-light mt-[1.4vh]">
              ایران، با ظرفیت‌های گسترده ژئوپلیتیکی، اقتصادی و منابع انسانی،
              پتانسیل آن را دارد که در مسیر رهبری اقتصادی منطقه‌ای و جهانی قرار
              گیرد. ما در «گروه توسعه تجربه امکان» بر این باوریم که با رویکردی
              نوآورانه، می‌توان زیرساخت‌های توسعه‌ای کشور را تقویت و مسیر جدیدی
              برای پیشرفت اقتصادی ترسیم کرد. با ما همراه شوید تا مسیر تحول
              اقتصادی و سرزمینی ایران را هموار کنیم.
            </p>
          </div>
          <div className="bg-[#F8F4EC] px-[4.52vh] py-[25px] w-[45%]">
            <h4 className="text-[2.5vh] font-bold">
              همکاری، از همین‌جا آغاز می‌شود!
            </h4>
            <p className="text-[1.7vh] font-light mt-[1.4vh]">
              گروه تجربه توسعه امکان، پلی میان سرمایه‌گذاران، توسعه‌دهندگان و
              راهبران اقتصادی است. اگر به دنبال هم‌افزایی در پروژه‌های کلان،
              سرمایه‌گذاری راهبردی یا مشاوره توسعه هستید، با ما در ارتباط باشید.
            </p>
            <div className="flex items-center gap-2.5 mt-[1.4vh] text-nowrap">
              <AppButton
                parentClassName="w-full"
                className="!bg-[#F8F4EC] py-[0.7vh] text-center"
                type="dashed"
              >
                <div className="flex items-center gap-[0.3vh] justify-between w-full">
                  <AppIcon
                    color="primary"
                    width="2.7vh"
                    height="2.7vh"
                    name="PhoneIcon"
                  />
                  <div dir="ltr">[ ۰۲۱ ] ۲۲۵۸۰۶۹۵</div>
                  <AppIcon
                    color="primary"
                    width="2.7vh"
                    height="2.7vh"
                    name="ArrowToX"
                  />
                </div>
              </AppButton>
              <AppButton
                parentClassName="w-full"
                className="!bg-[#F8F4EC] py-[0.7vh] text-center"
                type="dashed"
              >
                <div className="flex items-center gap-[0.3vh] justify-between w-full">
                  <AppIcon
                    color="primary"
                    width="2.7vh"
                    height="2.7vh"
                    name="PhoneIcon"
                  />
                  <div dir="ltr">info@emkan.world</div>
                  <AppIcon
                    color="primary"
                    width="2.7vh"
                    height="2.7vh"
                    name="ArrowToX"
                  />
                </div>
              </AppButton>
            </div>
          </div>
        </div>
        {/* part two */}
        <div className="flex items-start w-full mt-[2vh] text-[2vh]">
          {/* <Collapsible>
            <CollapsibleTrigger>
              Can I use this in my project?
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CollapsibleContent>
          </Collapsible> */}
          <div className="w-full">
            <h4 className="font-semibold mb-[1.5vh]">ماموریت ها</h4>
            <div className="flex flex-col gap-[0.3vh]">
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">راهبری اقتصادی</div>
              <div className="font-medium">شکل‌دهی آینده</div>
              <div className="font-medium">تمدن‌سازی</div>
            </div>
            <h4 className="font-semibold mt-[3vh] mb-[1.5vh]">
              مناطق پیشران اقتصادی
            </h4>
            <div className="flex flex-col gap-[0.3vh]">
              <div className="font-medium">مکران</div>
              <div className="font-medium">مناطق آزاد و ویژه اقتصادی</div>
              <div className="font-medium">جزایر و شهرهای جدید ساحلی</div>
            </div>
          </div>
          <Collapsible className="w-full">
            <h4 className="font-semibold mb-[1.5vh]">بخش‌های اقتصادی</h4>

            <div className="flex flex-col gap-[0.3vh]">
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <div className="flex items-center gap-[0.3vh]">
                <AppIcon
                  name="EnergyIcon"
                  color="primary"
                  width="2.5vh"
                  height="2.5vh"
                />
                <div className="font-medium">توسعه سرزمینی</div>
              </div>
              <CollapsibleContent>
                <div className="flex items-center gap-[0.3vh]">
                  <AppIcon
                    name="EnergyIcon"
                    color="primary"
                    width="2.5vh"
                    height="2.5vh"
                  />
                  <div className="font-medium">توسعه سرزمینی</div>
                </div>
                <div className="flex items-center gap-[0.3vh]">
                  <AppIcon
                    name="EnergyIcon"
                    color="primary"
                    width="2.5vh"
                    height="2.5vh"
                  />
                  <div className="font-medium">توسعه سرزمینی</div>
                </div>
                <div className="flex items-center gap-[0.3vh]">
                  <AppIcon
                    name="EnergyIcon"
                    color="primary"
                    width="2.5vh"
                    height="2.5vh"
                  />
                  <div className="font-medium">توسعه سرزمینی</div>
                </div>
              </CollapsibleContent>
              <CollapsibleTrigger>بیشتر</CollapsibleTrigger>
            </div>
          </Collapsible>
          <div className="w-full">
            <h4 className="font-semibold mb-[1.5vh]">دیدگاه‌ها و تحلیل‌ها</h4>
            <div className="flex flex-col gap-[0.3vh]">
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
            </div>
          </div>
          <div className="w-[35%]">
            <h4 className="font-semibold mb-[1.5vh]">درباره امکان</h4>

            <div className="flex flex-col gap-[0.3vh]">
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
              <div className="font-medium">توسعه سرزمینی</div>
            </div>
          </div>
        </div>
        {/* part three  */}
        <div className="w-full flex border-y border-[#10494633] mt-[0.26vh] py-[0.70vh]">
          <div>
            <div className="flex items-start gap-[0.3vh] max-w-[29.30vh]">
              <AppIcon
                name="LocationDashedIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
              <div>
                <div>
                  <div className="text-[1.13vh]">دفتر مرکزی</div>
                  <div className="text-[1.57vh]">
                    تهران، پاسداران، اختیاریه جنوبی، ساختمان هومهر، طبقه ۲، واحد
                    ۴
                  </div>
                </div>
                <div className="mt-[0.22vh]">
                  <div className="text-[1.13vh]">کد پستی</div>
                  <div className="text-[1.57vh]">۱۹۴۶۷۸۳۷۴۷</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-[0.3vh] max-w-[29.30vh]">
              <AppIcon
                name="LocationDashedIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
              <div>
                <div>
                  <div className="text-[1.13vh]">دفتر مرکزی</div>
                  <div className="text-[1.57vh]">
                    تهران، پاسداران، اختیاریه جنوبی، ساختمان هومهر، طبقه ۲، واحد
                    ۴
                  </div>
                </div>
                <div className="mt-[0.22vh]">
                  <div className="text-[1.13vh]">کد پستی</div>
                  <div className="text-[1.57vh]">۱۹۴۶۷۸۳۷۴۷</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-auto">
            <AppInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeHolder="جستجو"
              icon="SearchIcon"
              className="rounded-full h-[4.35vh]"
            />
            <div className="flex items-center gap-[0.43vh] justify-end mt-[0.87vh]">
              <AppIcon
                name="EnergyIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
              <AppIcon
                name="EnergyIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
              <AppIcon
                name="EnergyIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
              <AppIcon
                name="EnergyIcon"
                color="primary"
                width="2.5vh"
                height="2.5vh"
              />
            </div>
          </div>
        </div>
        {/* part four  */}
        <div className="flex items-center justify-between w-full pt-[0.70vh] text-[1.13vh] font-normal">
          <div className="flex items-center gap-[0.22vh]">
            <div>طراحی شده در تیم محصول گروه تجربه توسعه امکان</div>
            <div>|</div>
            <div>
              کلیه حقوق مادی و معنوی این طرح متعلق به گروه تجربه توسعه امکان
              می‌باشد.
            </div>
          </div>
          <div className="flex items-center gap-[0.3vh]">
            <div className="text-[1.22vh] font-normal mt-[0.09vh]">English</div>
            <AppIcon
              color="primary"
              name="ReagonIcon"
              width="2.5vh"
              height="2.5vh"
            />
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default LandingSectionSix;
