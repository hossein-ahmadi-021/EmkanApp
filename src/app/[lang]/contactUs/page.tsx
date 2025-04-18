import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";
import AppInput from "@/common/appInput";

export default async function ContactUs({}: {
  params: Promise<{ lang: reagonTypes }>;
}) {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 text-primary bg-yellow-500">
      <div className="col-span-3 p-16">
        <h1 className="text-xl font-medium mb-[30px]">
          لطفا جهت ارسال پیام به کارشناسان گروه تجربه توسعه امکان فرم زیر را
          تکمیل کنید
        </h1>
        <section className="flex flex-col gap-5">
          <div className="flex items-end gap-5 w-full">
            <AppInput label="نام" placeHolder="نام خود را کامل وارد کنید" />
            <AppInput
              label="نام خانوادگی"
              placeHolder="نام خانوادگی خود را کامل وارد کنید"
            />
          </div>
          <div className="flex items-center gap-2">
            <AppInput label="پست الکترونیک" placeHolder="Email@example.com" />
            <AppInput label="تلفن تماس" />
          </div>
        </section>
      </div>
      <div className="col-span-2 col-start-4 p-16">2</div>
    </div>
  );
}
