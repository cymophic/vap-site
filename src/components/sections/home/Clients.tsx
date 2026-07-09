import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Clients() {
  const logos = getLogos();

  return (
    <section className="flex flex-col gap-12">
      <p className="text-xs font-semibold uppercase text-center tracking-widest text-zinc-500">
        Trusted by Businesses Across Multiple Industries Worldwide
      </p>
      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="mx-6 md:mx-10 flex items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="h-8 md:h-10 w-auto object-contain grayscale-100 opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Function for getting logos
function getLogos() {
  const logoDir = path.join(process.cwd(), "public/assets/clients");

  return fs
    .readdirSync(logoDir)
    .filter((f) => /\.(png|jpg|svg|webp)$/.test(f))
    .map((filename) => ({
      src: `/assets/clients/${filename}`,
      alt: filename
        .replace(/\.[^.]+$/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    }));
}
