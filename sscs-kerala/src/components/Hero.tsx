import { ArrowRight, Users, Award, Calendar, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/siteData";

const highlights = [
  { icon: Users, value: "1,200+", label: "Members" },
  { icon: Award, value: "18", label: "Awards" },
  { icon: Calendar, value: "45+", label: "Events" },
  { icon: CheckCircle2, value: "22", label: "Chapters" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_transparent_35%),linear-gradient(135deg,_#0f172a_0%,_#111c38_42%,_#172554_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.08), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-pro relative px-4 py-20 lg:px-0 lg:py-28">
        <div className="mx-auto max-w-3xl text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            Applications open for 2026 membership
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            IEEE SSCS Kerala Chapter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300 sm:mt-6"
          >
            Pioneering semiconductor innovation across Kerala — empowering the next generation of chip designers, researchers, and industry leaders with world-class education, global networking, and hands-on VLSI excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 text-sky-300" />
            Official IEEE chapter with a growing semiconductor footprint in Kerala
          </motion.div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={contact.links.join} className="btn-blue w-full sm:w-auto">
              Join as a Member
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#events" className="btn-white-outline w-full sm:w-auto">
              View Events
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950/95 p-8 shadow-[0_32px_80px_-34px_rgba(15,23,42,0.65)] sm:p-10">
            <div className="grid grid-cols-2 divide-y divide-slate-800 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className={`py-6 first:pt-0 last:pb-0 lg:py-0 lg:first:pl-0 lg:pl-8 ${
                      idx < 2 ? "lg:pt-0" : "lg:pb-0"
                    } ${idx % 2 === 0 ? "lg:pl-0" : ""} ${idx < 2 ? "pb-6" : "pt-6"}`}
                  >
                    <div className="flex items-center gap-2.5 text-sky-300">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sky-300 shadow-[0_8px_20px_-18px_rgba(56,189,248,0.9)]">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
                        {h.label}
                      </span>
                    </div>
                    <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                      {h.value}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div className="text-[13px] font-medium text-slate-500">
                In partnership with global standards body
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] font-bold tracking-wider text-slate-400">
                <span>IEEE</span>
                <span>SSCS</span>
                <span>VLSI Society</span>
                <span>Kerala Section</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
