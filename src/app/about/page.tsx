import Hero from "@/components/sections/about/Hero";
import Bio from "@/components/sections/about/Bio";
import ActionBanner from "@/components/sections/home/ActionBanner";

export default function About() {
  return (
    <div className="mx-auto w-full flex flex-1 flex-col font-sans pt-38 pb-18 px-4 xl:px-8 gap-34">
      <Hero />
      <Bio />
      <ActionBanner />
    </div>
  );
}
