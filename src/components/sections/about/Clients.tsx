import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Clients() {
  const logos = getLogos().reverse();

  return (
    <section className="w-full flex flex-col py-28 gap-20">
      <p className="text-xs font-semibold uppercase text-center tracking-widest text-zinc-500">
        Trusted by Businesses Worldwide
      </p>
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-20 items-center px-8 justify-items-center  justify-center">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="h-8 md:h-12 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
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
