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
    <div className="flex flex-1 flex-col font-sans pt-38 gap-34">
      <div className="w-full max-w-7xl mx-auto px-8">
        <Hero />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8">
        <Clients />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8">
        <TrackRecord />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8">
        <Services />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8">
        <Process />
      </div>
      <div className="w-full max-w-7xl mx-auto px-8">
        <Testimonials />
      </div>
      <div className="w-full max-w-3xl mx-auto px-8">
        <FAQ />
      </div>
      <div className="w-full">
        <ActionBanner />
      </div>
    </div>
  );
}
