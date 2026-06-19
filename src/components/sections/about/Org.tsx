import Image from "next/image";

export default function Org() {
  return (
    <section className="w-full bg-zinc-100 py-28">
      <div className="mx-auto max-w-5xl px-4 xl:px-8 flex flex-col md:flex-row md:items-center gap-18">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Mission
          </p>
          <h2 className="-mt-4 text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            What We Stand For
          </h2>
          <div className="flex flex-col gap-4 text-zinc-500 text-base leading-relaxed">
            <p>
              Virtual Assistant Provider&#39;s primary objective is to help
              their clients reach their personal and professional milestones
              with ease while providing efficient and effective service delivery
              that ensures their satisfaction.
            </p>
            <p>
              If you&#39;re searching for a reliable virtual assistant, look no
              further than Jenny Ann and her team at Virtual Assistant Provider.
              They are committed to helping you achieve your goals and freeing
              up your valuable time so that you can focus on what&#39;s
              essential.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="shrink-0">
          <div className="relative shadow-2xl w-72 md:w-96 aspect-3/4 rounded-3xl overflow-hidden bg-zinc-200 mx-auto">
            <Image
              src="/assets/about/team.jpg"
              alt="Virtual Assistant Provider team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
