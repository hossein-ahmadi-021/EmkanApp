import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/videos/landing-bg-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 pt-24">
        <div className="text-red-500">{dict.home.title}</div>
        <div className="">{dict.home.description}</div>
      </div>
    </div>
  );
}
