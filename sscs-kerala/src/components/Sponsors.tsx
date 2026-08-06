import { ExternalLink, ArrowUpRight } from "lucide-react";
import { sponsors } from "../data/siteData";

export default function Sponsors() {
  const tiers = [
    "Premier",
    "Industry Partner",
    "Academic Partner",
    "Media Partner",
  ] as const;

  return (
    <section className="section-pad bg-white">
      <div className="container-pro">
        <div className="section-header">
          <span className="eyebrow">Ecosystem</span>
          <h2 className="heading-2 mt-5">Our Partners & Supporters</h2>
          <p className="section-lead">
            SSCS Kerala works closely with the IEEE ecosystem, state missions, and partner
            universities to deliver real impact to our members.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {tiers.map((tier) => {
            const tierItems = sponsors.filter((s) => s.tier === tier);
            if (tierItems.length === 0) return null;
            return (
              <div key={tier}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {tier}
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="numbered-label text-slate-400">{tierItems.length}</span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                  {tierItems.map((s, i) => (
                    <a
                      key={s.name}
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1"
                    >
                      <div className="absolute top-0 left-0 h-px w-0 bg-slate-900 transition-all duration-500 group-hover:w-20" />
                      <div className="absolute top-5 right-5 text-slate-400">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 text-white text-[11px] font-bold tracking-wider transition-all duration-300 group-hover:scale-105">
                          {s.name.slice(0, 3).toUpperCase()}
                        </div>
                        <ExternalLink className="h-4 w-4 shrink-0 text-[var(--color-ink-300)] transition-all group-hover:text-[var(--color-black)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                      </div>
                      <div className="mt-7">
                        <h3 className="font-display text-lg font-semibold text-slate-900 leading-tight">
                          {s.name}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.75] text-slate-500">
                          {s.tagline}
                        </p>
                      </div>
                      <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[12px] font-medium text-slate-400">
                          {tier}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-900">
                          Visit
                          <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
                        </span>
                      </div>
                    </a>
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
