import { motion } from "framer-motion";
import { Globe2, Users, Building2, Calendar, Award, MapPin, Radio } from "lucide-react";

interface GlobalReachData {
  region: string;
  section: string;
  society: string;
  globalChapters: string;
  globalMembers: string;
  countries: string;
  flagships: string;
  jsscImpact: string;
}

interface Props {
  data: GlobalReachData;
}

export default function GlobalReach({ data }: Props) {
  const items = [
    { label: "Society", value: data.society, icon: Users, tint: "from-ieee-blue to-cyan-500" },
    { label: "Region", value: data.region, icon: Globe2, tint: "from-blue-500 to-indigo-600" },
    { label: "Section", value: data.section, icon: MapPin, tint: "from-teal-500 to-emerald-500" },
    { label: "Worldwide Chapters", value: data.globalChapters, icon: Building2, tint: "from-violet-500 to-purple-600" },
    { label: "Global Members", value: data.globalMembers, icon: Radio, tint: "from-rose-500 to-pink-600" },
    { label: "Countries", value: data.countries, icon: Globe2, tint: "from-amber-500 to-orange-600" },
    { label: "Flagship Conferences", value: data.flagships, icon: Calendar, tint: "from-fuchsia-500 to-violet-600" },
    { label: "JSSC Impact", value: data.jsscImpact, icon: Award, tint: "from-emerald-500 to-teal-600" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-ieee-blue-darker via-60% to-slate-950 text-white py-24 noise-bg">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(circle_at_70%_90%,rgba(196,160,0,0.22),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-cyan-200 backdrop-blur">
            <Globe2 className="h-3.5 w-3.5" />
            Global Footprint
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
            Part of a <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200 bg-clip-text text-transparent">Worldwide Community</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400 text-pretty">
            The Kerala Chapter is a proud node in IEEE SSCS's global network of semiconductor
            professionals — connecting local talent to world-class resources, conferences and research.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${item.tint} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="relative">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tint} text-white shadow-lg ring-1 ring-white/10`}>
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-1 font-display text-lg font-extrabold leading-tight tracking-tight text-white">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-ieee-blue-dark/40 via-ieee-blue/30 to-cyan-600/20 p-8 backdrop-blur"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white text-balance">
                Access JSSC, ISSCC, Distinguished Lecturers and more.
              </h3>
              <p className="mt-3 text-slate-300 text-pretty">
                Your SSCS membership through Kerala Chapter gives you the same premium content,
                conference discounts, and global network that 10,000+ engineers worldwide depend on.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://sscs.ieee.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-ieee-blue shadow-professional-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Explore SSCS Membership
              </a>
              <a
                href="https://ieeekerala.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Visit Kerala Section
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
