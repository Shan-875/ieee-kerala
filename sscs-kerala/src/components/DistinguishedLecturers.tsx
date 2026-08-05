import { motion } from "framer-motion";
import { Quote, Mic, GraduationCap } from "lucide-react";
import { distinguishedLecturers } from "../data/siteData";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);

export default function DistinguishedLecturers() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-50 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-violet-700">
            <Mic className="h-3.5 w-3.5" />
            Expert Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Distinguished <span className="text-ieee-blue">Lecturers & Experts</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Speakers and subject-matter experts hosted by SSCS Kerala — from labs, fabs, and
            semiconductor programs across India.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {distinguishedLecturers.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)]"
            >
              <Quote className="pointer-events-none absolute right-6 top-6 h-10 w-10 text-slate-100 transition group-hover:text-ieee-blue/10" />

              <div className="flex flex-wrap items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${l.avatarTint} text-white shadow-xl`}
                >
                  <span className="font-display text-xl font-black tracking-tight">
                    {initialsOf(l.name)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold text-slate-900">{l.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-ieee-blue">{l.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{l.organization}</p>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                <GraduationCap className="h-3.5 w-3.5" />
                Topic: {l.topic}
              </div>

              <blockquote className="mt-5 border-l-4 border-ieee-blue/30 pl-4 text-slate-700 leading-relaxed italic">
                "{l.quote}"
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
