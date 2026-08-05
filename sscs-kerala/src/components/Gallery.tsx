import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { galleryImages } from "../data/siteData";

const imgUrl = (prompt: string, size: string) => {
  const encoded = encodeURIComponent(prompt);
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encoded}&image_size=${size}`;
};

const aspectMap: Record<string, string> = {
  landscape_16_9: "aspect-[16/9]",
  landscape_4_3: "aspect-[4/3]",
  portrait_16_9: "aspect-[9/16]",
  portrait_4_3: "aspect-[3/4]",
  square: "aspect-square",
  square_hd: "aspect-square",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-ieee-blue">
            <ZoomIn className="h-3.5 w-3.5" />
            Gallery
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Moments & <span className="text-ieee-blue">Highlights</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A glimpse into our workshops, conferences, student activities, and chapter events across Kerala.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group mb-5 break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5 ${
                  aspectMap[image.size] ?? "aspect-[4/3]"
                }`}
              >
                <img
                  src={imgUrl(image.prompt, image.size)}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 via-40% to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    <ZoomIn className="h-3.5 w-3.5" />
                    SSCS Kerala
                  </div>
                  <p className="mt-1.5 text-sm font-semibold leading-snug">{image.alt}</p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
