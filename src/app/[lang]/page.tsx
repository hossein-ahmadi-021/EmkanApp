import { getDictionary } from "@/lib/dictionaries/dictionary";
import { checkRtl } from "@/lib/utils/lang";
import Landing from "@/containers/landing";
import { reagonTypes } from "@/types/public/Dictionaries/dictionaries.types";
import { homeSectionDictTypes } from "@/types/landing/landing.types";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: reagonTypes }>;
}) {
  const { lang } = await params;
  const isRtl = checkRtl(lang);
  const dict = (await getDictionary(lang, "home")) as homeSectionDictTypes;

  return <Landing rtl={isRtl} dict={dict} />;
}
