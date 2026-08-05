import { motion } from "framer-motion";
import { ExternalLink, CalendarDays, MapPin } from "lucide-react";
import { flagshipConferences } from "../data/siteData";

export default function FlagshipConferences() {
  return (
    <section id="conferences" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-20 top-40 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute left-1/2 bottom-0 h-60 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-cyan-200 backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5" />
            World of SSCS
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Flagship SSCS <span className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">Conferences</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Members of SSCS Kerala get discounts, paper-submission guidance and chapter
            travel-grants for the world's best solid-state circuits conferences.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {flagshipConferences.map((conf, i) => (
            <motion.a
              key={conf.title}
              href={conf.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_-20px_rgba(56,189,248,0.25)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 opacity-40 bg-gradient-to-br ${conf.accent}`}
              />
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/60 via-slate-950/30 to-transparent" />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/70">
                    {conf.code}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  Learn more
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </span>
              </div>

              <p className="relative mt-6 leading-relaxed text-white/80">{conf.description}</p>

              <div className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {conf.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-cyan-300" />
                  {conf.when}
                </span>
                <span className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:translate-x-1 group-hover:bg-white group-hover:text-slate-900">
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
