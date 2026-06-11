import Hero from "@/components/sections/home/Hero";
import Clients from "@/components/sections/home/Clients";
import Services from "@/components/sections/home/Services";
import TrackRecord from "@/components/sections/home/TrackRecord";
import Process from "@/components/sections/home/Process";
import Testimonials from "@/components/sections/home/Testimonials";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl w-full flex flex-1 flex-col font-sans pt-38 px-4 xl:px-8 gap-34">
      <Hero />
      <Clients />
      <TrackRecord />
      <Services />
      <Process />
      <Testimonials />
    </div>
  );
}
