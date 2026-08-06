import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The SSCS Kerala workshops and mentorship directly landed me my first VLSI design internship at a top semiconductor firm. The chapter genuinely cares about student outcomes.",
    name: "Anika Varma",
    title: "MTech VLSI Design, CUSAT · SSCS Student Member",
  },
  {
    quote:
      "As a faculty coordinator, I've seen this chapter organize professional-grade events — from proposal to execution everything is top notch, comparable to national-level technical societies.",
    name: "Dr. Manoj Kurup",
    title: "Professor & Dean (R&amp;D), NIT Calicut",
  },
  {
    quote:
      "SSCS Kerala's Distinguished Lecturer events are always well organized. I send my entire team to attend because the quality of talks and networking is genuinely worth the trip.",
    name: "Arjun Menon",
    title: "Senior Design Manager · Analog Devices India",
  },
  {
    quote:
      "From the research travel grant to the paper reviews and industry connections — the chapter supported me through every step of my PhD research on low-power ADCs.",
    name: "Sruthi Sreenivasan",
    title: "PhD Research Scholar · IIT Madras / SSCS Kerala",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="eyebrow-text">Testimonials</span>
          <h2 className="section-heading">What our community says</h2>
          <p className="section-subheading">
            Feedback from students, faculty and industry partners who work closely with the SSCS
            Kerala Chapter every year.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => {
            const initials = t.name
              .split(" ")
              .filter((_, i, a) => i === 0 || i === a.length - 1)
              .map((n) => n[0])
              .join("");
            return (
              <figure key={t.name} className="group card-base p-7 sm:p-8 flex flex-col h-full bg-blue-100 border-blue-200">
                <Quote className="h-8 w-8 text-blue-600/80 shrink-0" strokeWidth={1.5} />
                <blockquote className="mt-5 text-[15.5px] leading-7 text-slate-900">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-7 pt-6 border-t border-blue-200 flex items-center gap-4 mt-auto">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-sky-700 text-white font-bold tracking-tight ring-4 ring-blue-100 transition-transform group-hover:scale-[1.08]">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 leading-tight">{t.name}</div>
                    <div className="mt-0.5 text-[13px] text-blue-900 leading-snug">
                      {t.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
