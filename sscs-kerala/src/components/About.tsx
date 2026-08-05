import { motion } from "framer-motion";
import {
  GraduationCap,
  Factory,
  PenTool,
  Users,
  HeartHandshake,
  Gem,
  Cpu,
  Globe2,
  Award,
  Building2,
} from "lucide-react";
import { about, contact } from "../data/siteData";

const pillarIconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Factory,
  PenTool,
  Users,
  HeartHandshake,
  Gem,
};

const societyFactIcons = [Globe2, Award, Cpu, Building2];

export default function About() {
  return (
    <>
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-bold tracking-wider uppercase text-ieee-blue">
              <Cpu className="h-3.5 w-3.5" />
              About the Chapter
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              About <span className="text-ieee-blue">IEEE SSCS Kerala</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{about.tagline}</p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-sm lg:p-10">
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Who we are
              </h3>
              <p className="mt-4 leading-relaxed text-slate-700">{about.whoWeAre}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-ieee-blue/15 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white shadow-md shadow-ieee-blue/20">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-slate-900">
                    Our Vision
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-600">{about.vision}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-white via-amber-50/60 to-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-slate-900">
                    Our Mission
                  </h4>
                  <p className="mt-2 leading-relaxed text-slate-600">{about.mission}</p>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={contact.links.sscsMembership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-ieee-blue px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ieee-blue/20 transition hover:-translate-y-0.5 hover:bg-ieee-blue-dark"
                >
                  Join the Chapter
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-ieee-blue hover:text-ieee-blue"
                >
                  Write to us
                </a>
              </div>
            </article>

            <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {about.societyFacts.map((f, i) => {
                const Icon = societyFactIcons[i % societyFactIcons.length];
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-ieee-blue/20 to-cyan-400/10 blur-2xl" />
                    <div className="relative flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                          {f.label}
                        </p>
                        <p className="mt-1 font-display text-2xl font-black tracking-tight text-slate-900">
                          {f.value}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                      {f.detail}
                    </p>
                  </motion.div>
                );
              })}
            </aside>
          </div>

          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What the <span className="text-ieee-blue">Chapter does</span>
              </h3>
              <p className="mt-4 text-slate-600">
                Six functional pillars powering SSCS Kerala's day-to-day impact across members,
                colleges and industry.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {about.pillars.map((p, i) => {
                const Icon = pillarIconMap[p.icon] ?? Gem;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_30px_60px_-20px_rgba(0,98,155,0.25)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white shadow-lg shadow-ieee-blue/20 transition group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-slate-900">
                        {p.title}
                      </h4>
                      <p className="mt-2 leading-relaxed text-slate-600">{p.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="join"
        className="relative overflow-hidden bg-gradient-to-br from-ieee-blue via-ieee-blue to-ieee-blue-dark py-20"
      >
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Join IEEE SSCS Society
            </h2>
            <p className="mt-4 text-white/80">
              Be part of the world's leading community for solid-state circuits professionals. Gain
              access to premium publications, flagship conferences, global networking, and
              industry-leading education — all through the Kerala Chapter.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3 lg:gap-4">
            <a
              href={contact.links.sscsMembership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-ieee-blue shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Join SSCS Now
            </a>
            <a
              href={contact.links.join}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Join IEEE First
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
