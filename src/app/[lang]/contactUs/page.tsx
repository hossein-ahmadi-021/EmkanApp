import { getDictionary } from "@/lib/dictionaries/dictionary";
import { checkRtl } from "@/lib/utils/lang";
import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";

export default async function ContactUs({
  params,
}: {
  params: Promise<{ lang: reagonTypes }>;
}) {
  const { lang } = await params;
  const isRtl = checkRtl(lang);
  const dict = await getDictionary(lang, "home");

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 text-primary">
      <div className="col-span-3 p-16">
        <h1 className="text-xl font-medium">
          لطفا جهت ارسال پیام به کارشناسان گروه تجربه توسعه امکان فرم زیر را
          تکمیل کنید
        </h1>
      </div>
      <div className="col-span-2 col-start-4 p-16">2</div>
    </div>
  );
}
