import { getDictionary } from "@/lib/dictionaries/dictionary";
import LandingSection from "@/containers/landing";
import { checkRtl } from "@/lib/utils/lang";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "fa" }>;
}) {
  const { lang } = await params;
  const isRtl = checkRtl(lang);
  const dict = await getDictionary(lang, "home");

  return (
    <div className="h-screen overflow-hidden">
      <LandingSection rtl={isRtl} dict={dict} />
    </div>
  );
}
