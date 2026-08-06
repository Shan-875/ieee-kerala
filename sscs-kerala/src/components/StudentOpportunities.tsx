import {
  GraduationCap,
  Rocket,
  Sparkles,
  Briefcase,
  ArrowUpRight,
  Users,
} from "lucide-react";

const opportunities = [
  {
    icon: Sparkles,
    title: "SSCS Student Membership",
    desc: "Join as a student member for exclusive access to conferences, workshops, mentorship programs and travel grants.",
    tag: "Open year-round",
    cta: "Join as Student",
  },
  {
    icon: GraduationCap,
    title: "Summer Research Fellowship",
    desc: "Paid 8-week research fellowship under faculty mentors at IITs/NITs for students with top academic records.",
    tag: "Applications: March",
    cta: "Apply for Fellowship",
  },
  {
    icon: Rocket,
    title: "Open-Source Silicon Program",
    desc: "End-to-end chip-design experience using SkyWater 130 nm PDK — from RTL to GDS-II with fabrication subsidy.",
    tag: "Cohort: Jul – Dec",
    cta: "Join Silicon Program",
  },
  {
    icon: Briefcase,
    title: "Industry Internship &amp; Career Fair",
    desc: "Direct hiring pipeline with partner semiconductor companies — TI, ADI, Qualcomm, NVIDIA and more.",
    tag: "Career Fair: Nov",
    cta: "View Internships",
  },
];

export default function StudentOpportunities() {
  return (
    <section id="students" className="section-padding bg-blue-950 text-white">
      <div className="container-pro">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-400">
              For students
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] max-w-xl">
              Programs built to launch your semiconductor career
            </h2>
            <p className="mt-5 max-w-lg text-[16px] text-slate-100 leading-8">
              SSCS Kerala invests in every student member with structured programs, hands-on
              research, industry connections and financial support to attend national and
              international events.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[14px] text-slate-300">
              <Users className="h-5 w-5 text-blue-400" />
              <span>96% of our 2024 student members secured internships or full-time roles.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {opportunities.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group relative rounded-2xl border border-blue-200/20 bg-blue-950/90 p-7 transition-all hover:border-blue-400/50 hover:bg-blue-950"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="mt-2 inline-flex items-center rounded-full border border-sky-300/20 bg-sky-900/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-200">
                    {o.tag}
                  </div>
                  <h3 className="mt-4 font-bold text-white text-lg leading-snug">{o.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-6 text-blue-200">{o.desc}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-sky-200 group-hover:text-white"
                  >
                    {o.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
