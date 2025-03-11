import { getDictionary } from "@/lib/dictionary";
import LandingSection from "@/containers/landing";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "fa" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");

  return (
    <div className="relative h-full overflow-hidden">
      <LandingSection dict={dict} />
    </div>
  );
}
