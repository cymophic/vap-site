import Hero from "@/components/sections/about/Hero";
import Founder from "@/components/sections/about/Founder";
import Org from "@/components/sections/about/Org";
import Stats from "@/components/sections/about/Stats";
import Clients from "@/components/sections/about/Clients";
import Services from "@/components/sections/home/Services";
import FAQ from "@/components/sections/home/FAQ";
import ActionBanner from "@/components/sections/about/ActionBanner";

export default function About() {
  return (
    <div className="mx-auto w-full flex flex-1 flex-col font-sans pt-20 md:pt-38">
      <div className="w-full max-w-7xl mx-auto px-8">
        <Hero />
      </div>
      <div className="w-full max-w-5xl mx-auto px-8">
        <Founder />
      </div>
      <div className="w-full">
        <Org />
      </div>
      <div className="w-full">
        <Stats />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8 pt-16">
        <Clients />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8 pt-16">
        <Services />
      </div>
      <div className="w-full max-w-3xl mx-auto px-8 py-34">
        <FAQ />
      </div>
      <div className="w-full">
        <ActionBanner />
      </div>
    </div>
  );
}
