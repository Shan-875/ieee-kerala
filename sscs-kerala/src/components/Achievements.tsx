import { motion } from "framer-motion";
import { Trophy, Calendar, Building2, HeartHandshake, Award } from "lucide-react";
import type { Achievement } from "../data/siteData";

const iconMap: Record<string, typeof Trophy> = {
  Trophy,
  Calendar,
  Building2,
  HeartHandshake,
  Award,
};

interface Props {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_20%_20%,#00629b_0,transparent_40%),radial-gradient(circle_at_80%_80%,#c4a000_0,transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-1 text-xs font-bold tracking-wider uppercase text-amber-700">
            <Trophy className="h-3.5 w-3.5" />
            Awards & Achievements
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance">
            Recognized for <span className="text-ieee-blue">Excellence</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 text-pretty">
            Awards and milestones that reflect our commitment to advancing solid-state circuits
            education, research, and community across Kerala and beyond.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Award;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-professional transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.22)]"
              >
                <div className={`pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${a.tint} blur-3xl`} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="inline-flex h-9 shrink-0 items-center rounded-xl bg-slate-100 px-3 text-xs font-black tracking-tight text-slate-700">
                    {a.year}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-lg font-bold text-slate-900">
                  {a.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {a.description}
                </p>
                <div className="relative mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      className="h-3.5 w-3.5 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
