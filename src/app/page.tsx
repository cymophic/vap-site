import Hero from "@/components/sections/home/Hero";
import Clients from "@/components/sections/home/Clients";
import Services from "@/components/sections/home/Services";
import TrackRecord from "@/components/sections/home/TrackRecord";
import Process from "@/components/sections/home/Process";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import ActionBanner from "@/components/sections/home/ActionBanner";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans pt-38 pb-18 px-4 xl:px-8 gap-34">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Clients />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <TrackRecord />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Services />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Process />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Testimonials />
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <FAQ />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <ActionBanner />
      </div>
    </div>
  );
}
