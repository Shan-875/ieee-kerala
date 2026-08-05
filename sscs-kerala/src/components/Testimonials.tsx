import { motion } from "framer-motion";
import { Quote, Users, UserCheck } from "lucide-react";
import { testimonials } from "../data/siteData";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.6)_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-rose-700">
            <Users className="h-3.5 w-3.5" />
            Members speak
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What our <span className="text-ieee-blue">members say</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Real outcomes from students, chapter leads and young professionals in SSCS Kerala's
            community.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)]"
            >
              <Quote className="h-8 w-8 shrink-0 text-ieee-blue/20 transition group-hover:text-ieee-blue/40" />
              <blockquote className="mt-4 flex-1 text-slate-700 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${t.avatarTint} text-white shadow-md`}
                >
                  <span className="font-display text-sm font-black tracking-tight">
                    {initialsOf(t.author)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[15px] font-bold text-slate-900">
                    <UserCheck className="h-3.5 w-3.5 text-ieee-blue" />
                    {t.author}
                  </div>
                  <div className="truncate text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
