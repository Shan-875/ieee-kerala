import { motion } from "framer-motion";
import { BookOpen, PenLine, ExternalLink, Sparkles } from "lucide-react";
import { researchHighlights } from "../data/siteData";

const tagStyle: Record<string, string> = {
  Journal:
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white ring-1 ring-white/10",
  Conference:
    "bg-gradient-to-r from-emerald-500 to-teal-600 text-white ring-1 ring-white/10",
  Featured:
    "bg-gradient-to-r from-amber-500 to-orange-500 text-white ring-1 ring-white/10",
};

export default function ResearchHighlights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-emerald-700">
            <PenLine className="h-3.5 w-3.5" />
            Publications
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Research, Journals & <span className="text-ieee-blue">Reading Circles</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Chapter-driven study of landmark papers from JSSC, ISSCC, and SSCS Magazine — plus
            curated research-outreach series.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {researchHighlights.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-surface p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)] sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${
                    tagStyle[r.tag] ?? "bg-slate-200 text-slate-700"
                  }`}
                >
                  {r.tag === "Journal" && <BookOpen className="h-3 w-3" />}
                  {r.tag === "Featured" && <Sparkles className="h-3 w-3" />}
                  {r.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition group-hover:text-ieee-blue">
                  Explore
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="font-display text-xl font-bold leading-snug text-slate-900 transition group-hover:text-ieee-blue">
                {r.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500">{r.authors}</p>
              <p className="mt-auto leading-relaxed text-slate-600">{r.summary}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
