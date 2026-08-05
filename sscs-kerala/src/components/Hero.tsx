import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ExternalLink,
  Sparkles,
  Cpu,
  Users,
  Award,
  BookOpen,
  Globe,
  Zap,
  Play,
} from "lucide-react";
import { heroSlides, benefits, contact, stats } from "../data/siteData";

const HERO_BG =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=panoramic%20photograph%20of%20modern%20semiconductor%20wafer%20fab%20clean%20room%20with%20engineers%20in%20white%20bunny%20suits%20working%20at%20advanced%20machinery%20blue%20and%20teal%20mood%20lighting%20ultra%20high%20definition%20photorealistic%20professional%20wide%20shot&image_size=landscape_16_9";

const trustLogos = [
  { label: "IEEE", sub: "Institute of Electrical and Electronics Engineers" },
  { label: "SSCS", sub: "Solid-State Circuits Society" },
  { label: "Kerala Section", sub: "IEEE India Council" },
  { label: "R10", sub: "Asia Pacific Region" },
];

const featureHighlights = [
  {
    icon: Zap,
    title: "Flagship Events",
    text: "Workshops on ASIC, FPGA, VLSI, & semiconductor design",
    tint: "from-cyan-400/30 to-blue-500/30",
  },
  {
    icon: BookOpen,
    title: "JSSC Access",
    text: "Top-cited solid-state circuits journal for every member",
    tint: "from-fuchsia-400/30 to-indigo-500/30",
  },
  {
    icon: Users,
    title: "100+ Chapters",
    text: "A global network of IC professionals & researchers",
    tint: "from-amber-400/30 to-orange-500/30",
  },
  {
    icon: Globe,
    title: "ISSCC & More",
    text: "Flagship conferences, Distinguished Lecturers, webinars",
    tint: "from-emerald-400/30 to-teal-500/30",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <>
      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-ieee-blue-dark/85 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.35),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8 lg:pt-36">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 pr-4 backdrop-blur-md"
                  >
                    <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-2.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950">
                      <Sparkles className="h-3 w-3" />
                      Official Chapter
                    </span>
                    <span className="text-xs font-semibold leading-none text-white/80">
                      IEEE Solid-State Circuits Society · Kerala
                    </span>
                  </motion.div>

                  <h1 className="mt-7 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                    {slide.title}
                    <span className="block mt-1 bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(34,211,238,0.25)]">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                    {slide.intro}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {benefits.map((b) => (
                      <li key={b.label}>
                        <a
                          href={b.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.7)]" />
                          <span className="truncate">{b.label}</span>
                          <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                      href={contact.links.join}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-ieee-blue shadow-[0_20px_50px_-15px_rgba(255,255,255,0.55)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-15px_rgba(255,255,255,0.7)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                      Join IEEE SSCS
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="#events"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <Play className="h-4 w-4 fill-white/80 stroke-1" />
                      View Events
                    </a>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
                    >
                      Learn about the chapter
                      <ArrowDown className="h-4 w-4 animate-bounce" />
                    </a>
                  </div>

                  <div className="mt-14 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setCurrent(
                          (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                        )
                      }
                      className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/15"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-2">
                      {heroSlides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrent(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === current
                              ? "w-10 bg-gradient-to-r from-cyan-300 to-blue-200"
                              : "w-2 bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrent((prev) => (prev + 1) % heroSlides.length)
                      }
                      className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/15"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,98,155,0.7)]"
              >
                <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-indigo-400/30 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-200">
                      <Cpu className="h-3.5 w-3.5" />
                      Chapter Pulse
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Live
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {stats.slice(0, 4).map((s, i) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
                          {s.value}
                        </div>
                        <div className="mt-1 text-xs font-medium leading-snug text-white/70">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3">
                    {featureHighlights.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div
                          key={f.title}
                          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:bg-white/[0.08]"
                          style={{ animationDelay: `${i * 80}ms` }}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.tint} text-white ring-1 ring-white/20`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-white">
                              {f.title}
                            </div>
                            <div className="truncate text-xs text-white/70">
                              {f.text}
                            </div>
                          </div>
                          <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-white/40 transition group-hover:translate-x-1 group-hover:text-white" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-300/30 bg-gradient-to-r from-amber-400/20 via-orange-400/10 to-amber-400/20 p-4 ring-1 ring-amber-300/10">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-300/30 text-amber-100">
                        <Award className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-extrabold text-white">
                          IEEE SSCS Accredited Chapter
                        </div>
                        <div className="mt-0.5 text-xs leading-relaxed text-amber-100/80">
                          Officially recognized by the IEEE Solid-State Circuits Society — IEEE Kerala Section, R10.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-white"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      <section className="relative -mt-6 border-y border-slate-200 bg-gradient-to-b from-white to-slate-50 py-10 sm:py-12 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500 lg:border-r lg:border-slate-200 lg:pr-10">
              Trusted by the world's largest engineering community
            </div>
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {trustLogos.map((l) => (
                <div
                  key={l.label}
                  className="group flex flex-col items-center justify-center border-r border-dashed last:border-r-0 sm:border-r border-slate-200 sm:even:border-r-0 sm:last:border-r-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white shadow-md shadow-ieee-blue/20 transition group-hover:scale-105">
                      <span className="font-display text-[11px] font-black tracking-tight">
                        {l.label.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                      </span>
                    </div>
                    <div className="font-display text-lg font-extrabold tracking-tight text-slate-900">
                      {l.label}
                    </div>
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium text-slate-500 text-center px-2">
                    {l.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
