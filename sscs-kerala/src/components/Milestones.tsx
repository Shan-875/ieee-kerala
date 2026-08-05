import { motion } from "framer-motion";
import type { Milestone } from "../data/siteData";

interface Props {
  milestones: Milestone[];
}

export default function Milestones({ milestones }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24 noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,119,181,0.18),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(196,160,0,0.12),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-cyan-200 backdrop-blur">
            Our Journey
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
            Chapter <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400 text-pretty">
            A journey of consistent growth — from a handful of founding members to Kerala's premier
            semiconductor community, recognized at the India Council level.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-ieee-blue/40 to-amber-400/40 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <div className="absolute h-10 w-10 rounded-full bg-slate-950 ring-1 ring-white/10" />
                    <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-ieee-blue via-cyan-400 to-amber-400 shadow-[0_0_30px_rgba(0,119,181,0.45)] ring-4 ring-slate-950" />
                    <div className="absolute -ml-20 hidden text-right lg:block">
                      <div className={`font-display text-xs font-bold uppercase tracking-wider text-cyan-300 ${isLeft ? "hidden lg:hidden" : ""}`} />
                    </div>
                  </div>

                  <div className={`flex-1 pb-2 lg:w-1/2 ${isLeft ? "lg:pr-14" : "lg:pl-14"}`}>
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-0.5">
                      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-ieee-blue/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex flex-wrap items-center gap-3">
                        <span className="inline-flex h-9 items-center rounded-xl bg-gradient-to-r from-ieee-blue-light to-ieee-blue px-3 text-sm font-black tracking-tight text-white shadow-lg shadow-ieee-blue/30">
                          {m.year}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white">
                          {m.title}
                        </h3>
                      </div>
                      <p className="relative mt-4 text-sm leading-relaxed text-slate-300">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
