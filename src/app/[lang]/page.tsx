import { getDictionary } from "@/lib/dictionary";
import LandingSection from "@/containers/landing";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "nl" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative h-full overflow-hidden">
      <LandingSection dict={dict} />
    </div>
  );
}
