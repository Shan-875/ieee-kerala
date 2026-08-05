import { motion } from "framer-motion";
import {
  Trophy,
  Building2,
  GraduationCap,
  PlaneTakeoff,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { studentOpportunities } from "../data/siteData";

const iconMap: Record<string, typeof Trophy> = {
  PlaneTakeoff,
  Trophy,
  Building2,
  GraduationCap,
};

export default function StudentOpportunities() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-ieee-blue to-ieee-blue-dark py-24 text-white">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-cyan-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Student & YP Hub
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Students & Young <span className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">Professionals</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Travel grants, awards, chapter funding, and outreach kits — the SSCS global society
            funds real student impact every year.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {studentOpportunities.map((op, i) => {
            const Icon = iconMap[op.icon] ?? Trophy;
            return (
              <motion.a
                key={op.title}
                href={op.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_30px_60px_-20px_rgba(103,232,249,0.35)]"
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-60 blur-2xl bg-gradient-to-br ${op.tint}`}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold leading-snug">
                  {op.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/75">
                  {op.blurb}
                </p>
                <div className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 transition group-hover:translate-x-0.5 group-hover:text-white">
                  {op.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
