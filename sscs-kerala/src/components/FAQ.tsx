import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/siteData";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  return (
    <section className="section-pad bg-blue-50">
      <div className="container-pro max-w-4xl">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-2 mt-5">Frequently Asked Questions</h2>
          <p className="section-lead text-blue-800">
            Everything from joining SSCS, to starting a Student Branch Chapter, to funding research
            travel.
          </p>
        </div>

        <div className="mt-16 divide-y divide-blue-100 border-t border-b border-blue-100">
          {faqs.map((f, i) => {
            const active = open === f.q;
            return (
              <div
                key={f.q}
                className={`group relative transition-colors ${
                  active ? "bg-blue-100" : "bg-transparent hover:bg-blue-100/60"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${active ? "bg-[var(--color-black)]" : "bg-transparent"}`} />
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : f.q)}
                  className="flex w-full items-start justify-between gap-6 px-6 py-6 sm:px-8 sm:py-7 text-left"
                >
                  <div className="flex items-start gap-5 min-w-0">
                    <span className="numbered-label pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] font-semibold leading-snug ${
                        active ? "text-slate-900" : "text-blue-900"
                      }`}
                    >
                      {f.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 mt-0.5 transition-all duration-300 ${
                      active ? "rotate-180 text-[var(--color-black)]" : "text-[var(--color-ink-300)] group-hover:text-[var(--color-ink-500)]"
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-7 sm:px-8 pl-[72px] sm:pl-[88px] pr-14">
                      <p className="text-[14px] leading-[1.9] text-blue-800 max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
