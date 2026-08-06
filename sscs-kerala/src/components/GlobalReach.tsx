import { MapPin, Users, Globe2, GraduationCap, Briefcase, Award } from "lucide-react";

const iconMap = {
  countries: Globe2,
  members: Users,
  institutions: GraduationCap,
  industries: Briefcase,
  chapters: MapPin,
  awards: Award,
};

type StatsEntry = { label: string; value: string; desc: string };
type GlobalReachData = {
  region: string;
  section: string;
  society: string;
  globalChapters: string;
  globalMembers: string;
  countries: string;
  flagships: string;
  jsscImpact: string;
  stats?: Record<string, StatsEntry>;
  footprint?: string;
  regions?: string[];
};

type Props = { data: GlobalReachData };

export default function GlobalReach({ data }: Props) {
  const fallbackStats: Record<string, StatsEntry> = {
    countries: { label: "Countries", value: data.countries, desc: "Represented across the globe" },
    members: { label: "Members", value: data.globalMembers, desc: "Students, faculty, and professionals" },
    chapters: { label: "Chapters", value: data.globalChapters, desc: "Across the IEEE global network" },
    industries: { label: "Flagships", value: data.flagships, desc: "Annual flagship conferences" },
    awards: { label: "Impact", value: data.jsscImpact, desc: "High-impact recognition and publications" },
  };

  const entries: Array<[string, StatsEntry]> = Object.entries(data.stats ?? fallbackStats);

  return (
    <section id="reach" className="section-padding bg-slate-900 text-white">
      <div className="container-pro">
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-400">
            Global presence · Local impact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
            Part of IEEE SSCS — the world's largest solid-state circuits community
          </h2>
          <p className="mt-5 text-[16px] text-slate-300 leading-8 max-w-2xl">
            Through IEEE SSCS global network, our Kerala chapter members access opportunities spanning
            100+ countries, flagship conferences like ISSCC and VLSI Symposia, and the expertise of
            20,000+ industry leaders and researchers worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-[1px] bg-blue-900/10 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl border border-blue-300/10">
          {entries.map(([key, s]) => {
            const Icon = iconMap[key as keyof typeof iconMap] ?? Globe2;
            return (
              <div
                key={key}
                className="relative bg-blue-950 p-7 sm:p-8 transition-colors hover:bg-blue-900/80"
              >
                <div className="flex items-center gap-2.5 text-blue-400">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
                    {s.label}
                  </span>
                </div>
                <div className="mt-4 text-4xl font-extrabold tracking-tight text-white">
                  {s.value}
                </div>
                <p className="mt-2 text-[14px] leading-6 text-slate-400">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Kerala Chapter footprint</h3>
            <p className="mt-1 text-[14px] text-slate-400 max-w-xl">
              {data.footprint ?? "Kerala continues to grow as a hub for practical semiconductor education, industry partnerships, and student innovation."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {(data.regions ?? [data.region, data.section, data.society]).map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full border border-blue-200/20 bg-blue-50/10 px-3.5 py-1.5 text-[12.5px] font-medium text-blue-200"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
