import Hero from "@/components/sections/about/Hero";
import Founder from "@/components/sections/about/Founder";
import Org from "@/components/sections/about/Org";
import ActionBanner from "@/components/sections/home/ActionBanner";

export default function About() {
  return (
    <div className="mx-auto w-full flex flex-1 flex-col font-sans pt-38 pb-18 px-4 xl:px-8 gap-34">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <Founder />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <Org />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <ActionBanner />
      </div>
    </div>
  );
}
