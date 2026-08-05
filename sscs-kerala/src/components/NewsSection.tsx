import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Tag } from "lucide-react";
import type { NewsItem } from "../data/siteData";

interface Props {
  news: NewsItem[];
}

const categoryStyles: Record<NewsItem["category"], { chip: string; accent: string }> = {
  Award: { chip: "bg-amber-50 text-amber-700 border-amber-200", accent: "from-amber-400 to-orange-500" },
  Event: { chip: "bg-blue-50 text-blue-700 border-blue-200", accent: "from-blue-400 to-cyan-500" },
  Opportunity: { chip: "bg-emerald-50 text-emerald-700 border-emerald-200", accent: "from-emerald-400 to-teal-500" },
  Partnership: { chip: "bg-violet-50 text-violet-700 border-violet-200", accent: "from-violet-400 to-fuchsia-500" },
};

export default function NewsSection({ news }: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-ieee-blue">
              <CalendarDays className="h-3.5 w-3.5" />
              Latest News
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl text-balance">
              What's <span className="text-ieee-blue">Happening</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 text-pretty">
              Stay current with the latest announcements, awards, partnerships, and opportunities
              from the SSCS Kerala Chapter community.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-professional-sm transition hover:-translate-y-0.5 hover:border-ieee-blue hover:text-ieee-blue hover:shadow-professional"
          >
            Subscribe Newsletter
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {news.map((n, i) => {
            const style = categoryStyles[n.category];
            return (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-professional-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.22)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.accent}`} />
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-ieee-blue/10 to-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${style.chip}`}
                    >
                      <Tag className="h-3 w-3" />
                      {n.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{n.date}</span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-ieee-blue">
                    {n.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {n.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold text-slate-500">
                      SSCS Kerala Chapter
                    </span>
                    <a
                      href={n.href}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-ieee-blue transition"
                    >
                      Read more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
