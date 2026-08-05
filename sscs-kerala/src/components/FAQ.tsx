import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, CircleHelp } from "lucide-react";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ieee-blue/20 bg-ieee-blue/5 px-4 py-1 text-xs font-extrabold tracking-[0.2em] uppercase text-ieee-blue">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Frequently asked <span className="text-ieee-blue">questions</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Everything from joining SSCS, to starting a Student Branch Chapter, to funding research
            travel.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f) => {
            const active = open === f.q;
            return (
              <motion.div
                key={f.q}
                layout
                className={`overflow-hidden rounded-2xl border shadow-sm transition ${
                  active
                    ? "border-ieee-blue/40 bg-white shadow-[0_20px_50px_-20px_rgba(0,98,155,0.25)]"
                    : "border-slate-200 bg-surface"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : f.q)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-start gap-3">
                    <CircleHelp
                      className={`mt-0.5 h-5 w-5 shrink-0 transition ${
                        active ? "text-ieee-blue" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-[15px] font-bold leading-snug ${
                        active ? "text-ieee-blue" : "text-slate-800"
                      }`}
                    >
                      {f.q}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      active ? "rotate-180 text-ieee-blue" : "text-slate-400"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-14 text-slate-600 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
