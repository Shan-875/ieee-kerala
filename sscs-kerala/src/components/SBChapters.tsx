import { motion } from "framer-motion";
import { Building2, GraduationCap, CheckCircle2 } from "lucide-react";
import { sbChapters } from "../data/siteData";

const cardGradients = [
  "from-blue-600/10 to-blue-700/10",
  "from-cyan-600/10 to-teal-700/10",
  "from-indigo-600/10 to-violet-700/10",
  "from-emerald-600/10 to-green-700/10",
  "from-amber-600/10 to-orange-700/10",
  "from-rose-600/10 to-pink-700/10",
  "from-sky-600/10 to-blue-700/10",
];

export default function SBChapters() {
  return (
    <section id="sb-chapters" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-ieee-blue">
            <GraduationCap className="h-3.5 w-3.5" />
            Chapters Network
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Student Branch <span className="text-ieee-blue">Chapters</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Active SSCS Student Branch Chapters across engineering colleges in Kerala, driving semiconductor awareness,
            workshops, and student engagement locally.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sbChapters.map((college, index) => {
            const grad = cardGradients[index % cardGradients.length];
            return (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${grad} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_25px_50px_-20px_rgba(0,98,155,0.25)]`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ieee-blue shadow-md ring-1 ring-slate-900/5 transition group-hover:scale-105">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-ieee-blue/80">
                      <span>SB Chapter</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-emerald-700 ring-1 ring-emerald-600/20">
                        <CheckCircle2 className="h-3 w-3" />
                        Active
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-ieee-blue">
                      {college.name}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center rounded-md bg-white/80 px-2 py-0.5 font-semibold text-slate-600 ring-1 ring-slate-200">
                        {college.region}
                      </span>
                      <span className="inline-flex items-center rounded-md bg-white/80 px-2 py-0.5 font-semibold text-slate-600 ring-1 ring-slate-200">
                        Est. {college.established}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ieee-blue/10 text-ieee-blue">
            <Building2 className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
            Want to start an SSCS Student Branch Chapter at your college?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Reach out to the SSCS Kerala Chapter team and we'll help you set up, onboard, and run a
            student branch chapter with all the resources you need.
          </p>
          <a
            href="mailto:sscs@ieeekerala.org"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ieee-blue px-7 py-3 text-sm font-bold text-white shadow-lg shadow-ieee-blue/20 transition hover:-translate-y-0.5 hover:bg-ieee-blue-dark"
          >
            Contact Chapter Office
          </a>
        </motion.div>
      </div>
    </section>
  );
}
