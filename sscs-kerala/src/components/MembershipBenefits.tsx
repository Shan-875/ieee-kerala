import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  Award,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { membershipBenefits } from "../data/siteData";

const iconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  Award,
  Briefcase,
};

export default function MembershipBenefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-surface py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ieee-gold/20 bg-amber-50 px-4 py-1 text-xs font-bold tracking-wider uppercase text-amber-700">
            <Sparkles className="h-3.5 w-3.5" />
            Why Join SSCS
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Membership <span className="text-ieee-blue">Benefits</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Whether you're a student, researcher, or industry professional, IEEE SSCS membership
            unlocks career-defining opportunities in solid-state circuits.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {membershipBenefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Award;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 -top-20 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(0,98,155,0.18), transparent 60%)" }}
                />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white shadow-lg shadow-ieee-blue/20 transition group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{b.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
