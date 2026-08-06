import { MapPin, Calendar, ArrowUpRight, Cpu } from "lucide-react";
import { contact } from "../data/siteData";

const conferences = [
  {
    code: "ISSCC",
    fullName: "International Solid-State Circuits Conference",
    location: "San Francisco, USA",
    date: "Feb 2026",
    desc: "The world's premier solid-state circuits conference — the 'Olympics of Chip Design' where the latest breakthroughs in SoC, 5G, AI accelerators and sensor circuits are unveiled.",
    link: contact.links.isscc,
    tag: "Flagship",
  },
  {
    code: "VLSI Symposia",
    fullName: "Symposia on VLSI Technology and Circuits",
    location: "Kyoto, Japan",
    date: "Jun 2026",
    desc: "Joint technology and circuits conference showcasing leading-edge process nodes, advanced packaging and next-generation memory and compute architectures.",
    link: contact.links.symposiaVLSI,
    tag: "Joint Event",
  },
  {
    code: "CICC",
    fullName: "Custom Integrated Circuits Conference",
    location: "Boston, USA",
    date: "Sep 2026",
    desc: "Practitioner-focused conference on custom IC design — analog, mixed-signal, RF, power management and high-speed IO with strong industry participation.",
    link: contact.links.cicc,
    tag: "Industry",
  },
  {
    code: "ESSCIRC",
    fullName: "European Solid-State Circuits Conference",
    location: "Vienna, Austria",
    date: "Sep 2026",
    desc: "Europe's flagship SSCS event with circuits-oriented technical sessions and a strong focus on automotive, industrial IoT and silicon photonics.",
    link: contact.links.esscirc,
    tag: "International",
  },
];

export default function FlagshipConferences() {
  return (
    <section id="conferences" className="section-padding bg-slate-900 text-white">
      <div className="container-pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              Flagship conferences
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
              Attend the world's best semiconductor events
            </h2>
            <p className="mt-5 text-[16px] text-slate-300 leading-8">
              SSCS members enjoy discounted registration, paper submission opportunities and
              student travel grants at every IEEE SSCS flagship conference around the world.
            </p>
          </div>
          <a href={contact.links.sscs} className="btn-white-outline shrink-0 self-start">
            View all SSCS events
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {conferences.map((c) => (
            <a
              key={c.code}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 sm:p-8 transition-all hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400">
                    <Cpu className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                      {c.tag}
                    </div>
                    <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                      {c.code}
                    </h3>
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all group-hover:bg-white group-hover:text-slate-900 group-hover:border-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </div>
              </div>
              <h4 className="mt-5 text-[15px] font-semibold text-white leading-snug">
                {c.fullName}
              </h4>
              <p className="mt-2.5 text-[14px] leading-6 text-slate-400">{c.desc}</p>
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" /> {c.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-blue-400" /> {c.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
