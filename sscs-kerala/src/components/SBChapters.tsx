import { Building2, GraduationCap, ArrowRight } from "lucide-react";
import { sbChapters, contact } from "../data/siteData";

export default function SBChapters() {
  return (
    <section id="sb-chapters" className="section-padding bg-slate-100 text-slate-900">
      <div className="container-pro">
        <div className="section-header">
          <span className="eyebrow">Chapters Network</span>
          <h2 className="heading-2 mt-5">Student Branch Chapters</h2>
          <p className="section-lead">
            Active SSCS Student Branch Chapters across engineering colleges in Kerala, driving
            semiconductor awareness, workshops, and student engagement locally.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sbChapters.map((college) => (
            <div
              key={college.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
                  <Building2 className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    SB Chapter
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                    {college.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-slate-500">
                    <span>{college.region}</span>
                    <span>·</span>
                    <span>Est. {college.established}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 sm:p-14 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
            <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <h3 className="mt-7 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
            Start an SSCS Student Branch Chapter at your college
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-slate-600">
            Partner with IEEE SSCS Kerala to establish a student branch chapter, access structured
            support, and build a campus-level semiconductor community with expert guidance.
          </p>
          <a href={`mailto:${contact.email}`} className="group btn-primary mt-8 inline-flex items-center gap-2">
            Request Chapter Support
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
