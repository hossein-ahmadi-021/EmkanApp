import { getDictionary } from "@/lib/dictionaries/dictionary";
import { checkRtl } from "@/lib/utils/lang";
import Landing from "@/containers/landing";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "fa" }>;
}) {
  const { lang } = await params;
  const isRtl = checkRtl(lang);
  const dict = await getDictionary(lang, "home");

  return <Landing rtl={isRtl} dict={dict} />;
}
