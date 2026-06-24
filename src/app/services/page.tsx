import Hero from "@/components/sections/services/Hero";
import Service from "@/components/sections/services/Services";
import Process from "@/components/sections/home/Process";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import ActionBanner from "@/components/sections/about/ActionBanner";

export default function Services() {
  return (
    <div className="mx-auto w-full flex flex-1 flex-col font-sans pt-38 px-4 xl:px-8">
      <div className="w-full max-w-7xl mx-auto pt-12 pb-18">
        <Hero />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Service />
      </div>
      <div className="w-full max-w-7xl mx-auto pb-32">
        <Process />
      </div>
      <div className="w-full max-w-7xl mx-auto pb-32">
        <Testimonials />
      </div>
      <div className="w-full max-w-3xl mx-auto pb-30">
        <FAQ />
      </div>
      <div className="-mx-7 xl:-mx-11">
        <ActionBanner />
      </div>
    </div>
  );
}
