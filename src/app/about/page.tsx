import Hero from "@/components/sections/about/Hero";
import Founder from "@/components/sections/about/Founder";
import Org from "@/components/sections/about/Org";
import Stats from "@/components/sections/about/Stats";
import ActionBanner from "@/components/sections/home/ActionBanner";

export default function About() {
  return (
    <div className="mx-auto w-full flex flex-1 flex-col font-sans pt-38 pb-18 px-4 xl:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <Founder />
      </div>
      <div className="-mx-4 xl:-mx-8">
        <Org />
      </div>
      <div className="-mx-8 xl:-mx-12">
        <Stats />
      </div>
      <div className="w-full max-w-7xl pt-20 mx-auto">
        <ActionBanner />
      </div>
    </div>
  );
}
