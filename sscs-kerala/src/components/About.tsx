import { Target, Eye, Lightbulb, Users, BookOpen, Award, Rocket, ArrowRight } from "lucide-react";
import { contact } from "../data/siteData";

const pillars = [
  { icon: Users, title: "Community", desc: "Build a thriving network of semiconductor enthusiasts across Kerala." },
  { icon: BookOpen, title: "Education", desc: "Deliver world-class workshops, tutorials and certification programs." },
  { icon: Lightbulb, title: "Innovation", desc: "Support research projects and hackathons on next-gen circuits." },
  { icon: Award, title: "Excellence", desc: "Recognize outstanding contributions from students and researchers." },
  { icon: Rocket, title: "Industry", desc: "Bridge academia and industry through internships and expert talks." },
  { icon: Target, title: "Impact", desc: "Advance open-source silicon and skill development in the state." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-blue-950 text-white">
      <div className="container-pro">
        <div className="section-center mx-auto max-w-3xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-slate-700/40 bg-slate-950/90 px-4 py-2 shadow-lg shadow-slate-950/20 ring-1 ring-slate-800/30">
            <span className="eyebrow-text">Who we are</span>
          </div>
          <h2 className="section-heading">A center of excellence for semiconductor technology</h2>
          <p className="section-subheading">
            The IEEE Solid-State Circuits Society Kerala Chapter is a regional hub of the world's
            largest technical community devoted to integrated circuits, systems-on-chip and
            emerging solid-state devices.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="card-base p-7 bg-blue-950/95 border border-blue-800 shadow-blue-950/20">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Eye className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white">Our Vision</h3>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-slate-300">
                To position Kerala as a nationally recognized destination for semiconductor design,
                VLSI research, and innovation by nurturing talent, industry partnerships, and
                practical engagement between academia and industry.
              </p>
            </div>

            <div className="card-base p-7 bg-blue-950/95 border border-blue-800 shadow-blue-950/20">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700 text-white">
                  <Target className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white">Our Mission</h3>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-slate-300">
                To empower students, researchers and professionals through continuous learning,
                flagship events, distinguished lectures and access to the global IEEE SSCS network.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="group card-base flex flex-col p-6 rounded-3xl bg-blue-950/95 border border-blue-800 shadow-blue-950/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-700 bg-blue-900 text-blue-100 transition-all group-hover:border-blue-400 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mt-4 font-semibold text-white">{p.title}</h4>
                  <p className="mt-1.5 text-[14px] leading-6 text-slate-300">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-8 text-white sm:p-12 lg:p-14 shadow-xl shadow-blue-950/30">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Membership
              </span>
              <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Join 1,200+ members shaping the future of solid-state circuits
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-blue-100">
                Get access to premier conferences, Distinguished Lecturer programs, research
                grants, career fairs, and a global community of IC designers and semiconductor
                engineers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a href={contact.links.join} className="btn-white-solid">
                Join IEEE SSCS
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${contact.email}`} className="btn-white-outline">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
