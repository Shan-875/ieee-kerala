import { motion } from "framer-motion";
import { Mic2, CalendarDays, Star, ArrowRight, Tag } from "lucide-react";
import type { Event } from "../data/siteData";
import { events } from "../data/siteData";

const categoryStyles: Record<Event["category"], { badge: string; dot: string }> = {
  Workshop: { badge: "bg-blue-100 text-blue-700 border-blue-200", dot: "bg-blue-500" },
  Webinar: { badge: "bg-cyan-100 text-cyan-700 border-cyan-200", dot: "bg-cyan-500" },
  "Guest Lecture": { badge: "bg-violet-100 text-violet-700 border-violet-200", dot: "bg-violet-500" },
  Conference: { badge: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  "Hands-on": { badge: "bg-emerald-100 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
};

export default function Events() {
  const featured = events.find((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  return (
    <section id="events" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-ieee-blue">
            <CalendarDays className="h-3.5 w-3.5" />
            Events
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Events & <span className="text-ieee-blue">Programs</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Workshops, lectures, and industry talks curated for the semiconductor community in Kerala.
          </p>
        </div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-ieee-blue-dark via-ieee-blue to-ieee-blue-light text-white shadow-2xl shadow-ieee-blue/20"
          >
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                  Featured Event
                </div>
                <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-white/85">
                  Our flagship {featured.category.toLowerCase()} with expert-led sessions, hands-on labs,
                  and networking opportunities tailored for students and professionals in Kerala.
                </p>
                {featured.speakers.length > 0 && (
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-cyan-200/90">
                      Speakers
                    </div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {featured.speakers.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-white/90">
                          <Mic2 className="h-4 w-4 shrink-0 text-cyan-300" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-200/90">
                    Date
                  </div>
                  <div className="mt-1 font-display text-2xl font-extrabold">{featured.date}</div>
                </div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${
                    "bg-white/15 text-white border-white/25"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full bg-white/80`} />
                  {featured.category}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-ieee-blue shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((event, index) => {
            const style = categoryStyles[event.category];
            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_25px_50px_-20px_rgba(0,98,155,0.25)]"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-ieee-blue via-ieee-blue to-ieee-blue-dark px-6 py-5 text-white">
                  <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-cyan-200/90">
                        When
                      </div>
                      <div className="mt-1 font-display text-xl font-extrabold leading-tight">
                        {event.date}
                      </div>
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur ${style.badge.replace("bg-", "bg-").replace("text-", "text-").replace("border-", "border-")}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      <Tag className="h-3 w-3" />
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900 transition group-hover:text-ieee-blue">
                    {event.title}
                  </h3>

                  {event.speakers.length > 0 && (
                    <div className="mt-4 flex-1">
                      <ul className="space-y-1.5">
                        {event.speakers.map((speaker) => (
                          <li
                            key={speaker}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <Mic2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ieee-blue/70" />
                            {speaker}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="button"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition group-hover:border-ieee-blue group-hover:bg-ieee-blue group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
