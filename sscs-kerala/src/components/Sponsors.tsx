import { motion } from "framer-motion";
import { Handshake, ExternalLink } from "lucide-react";
import { sponsors } from "../data/siteData";

const tierColors: Record<string, string> = {
  Premier:
    "bg-gradient-to-r from-amber-500 to-yellow-500 text-white ring-1 ring-white/15",
  "Industry Partner":
    "bg-gradient-to-r from-ieee-blue to-blue-600 text-white ring-1 ring-white/15",
  "Academic Partner":
    "bg-gradient-to-r from-violet-600 to-indigo-600 text-white ring-1 ring-white/15",
  "Media Partner":
    "bg-gradient-to-r from-rose-500 to-pink-600 text-white ring-1 ring-white/15",
};

export default function Sponsors() {
  const tiers = [
    "Premier",
    "Industry Partner",
    "Academic Partner",
    "Media Partner",
  ] as const;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-indigo-700">
            <Handshake className="h-3.5 w-3.5" />
            Ecosystem
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our <span className="text-ieee-blue">partners & supporters</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            SSCS Kerala works closely with the IEEE ecosystem, state missions, and partner
            universities to deliver real impact to our members.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {tiers.map((tier, ti) => {
            const tierItems = sponsors.filter((s) => s.tier === tier);
            if (tierItems.length === 0) return null;
            return (
              <div key={tier}>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] ${
                      tierColors[tier]
                    }`}
                  >
                    {tier}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-slate-300/80 to-transparent" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {tierItems.map((s, i) => (
                    <motion.a
                      key={s.name}
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.05 + ti * 0.04 }}
                      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md ring-1 ring-white/20 ${tierColors[tier]}`}
                        >
                          <span className="font-display text-[11px] font-black tracking-tight">
                            {s.name.slice(0, 3).toUpperCase()}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ieee-blue" />
                      </div>
                      <div className="mt-5">
                        <h3 className="font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-ieee-blue">
                          {s.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                          {s.tagline}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
