import { GraduationCap, Quote } from "lucide-react";

const lecturers = [
  {
    name: "Prof. Behzad Razavi",
    title: "Distinguished Professor, UCLA",
    topic: "RF and mm-Wave Design Techniques for 5G/6G Radios",
    quote:
      "Kerala's student community asks the kind of probing questions that remind me why the Distinguished Lecturer program matters so much.",
    date: "Mar 2025",
    hosted: "Hosted at NIT Calicut",
  },
  {
    name: "Dr. Gabriele Manganaro",
    title: "Fellow, Analog Devices",
    topic: "High-Performance Data Converters: From Delta-Sigma to Continuous-Time",
    quote:
      "The chapter organized a flawless hybrid event with excellent student participation and hands-on lab demos.",
    date: "Jul 2025",
    hosted: "Hosted at IISc Kochi",
  },
  {
    name: "Prof. Donhee Ham",
    title: "Gordon McKay Professor, Harvard University",
    topic: "Bio-Integrated CMOS Imagers and Molecular-Electronic Interface Circuits",
    quote:
      "SSCS Kerala ranks among the most organized and professional chapters I have visited globally in the last five years.",
    date: "Oct 2025",
    hosted: "Hosted at IIT Palakkad",
  },
  {
    name: "Dr. Pavan Kumar Hanumolu",
    title: "Professor, UIUC / Apple",
    topic: "Power-Efficient Serial Links for Data-Center and Edge AI Accelerators",
    quote:
      "Incredibly well-prepared students, excellent local organization and a genuine curiosity — a model chapter.",
    date: "Nov 2025",
    hosted: "Virtual + IIT Palakkad",
  },
];

export default function DistinguishedLecturers() {
  return (
    <section id="lecturers" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="eyebrow-text">Distinguished Lecturer Program</span>
          <h2 className="section-heading">Learn from the world's leading circuit designers</h2>
          <p className="section-subheading">
            IEEE SSCS Distinguished Lecturers (DL) are world-renowned experts. Our chapter invites
            top DLs every year for free, open lectures accessible to every member and student.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {lecturers.map((l) => {
            const initials = l.name
              .split(" ")
              .filter((_, i, a) => i === 0 || i === a.length - 1)
              .map((n) => n[0])
              .join("");
            return (
              <article
                key={l.name}
                className="group card-base p-7 sm:p-8 relative"
              >
                <div className="absolute top-7 right-7 text-slate-200 transition-colors group-hover:text-blue-100">
                  <Quote className="h-8 w-8" strokeWidth={1.5} />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-white text-lg font-bold tracking-tight ring-4 ring-slate-100 transition-transform group-hover:scale-[1.06]">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{l.name}</h3>
                    <p className="mt-0.5 text-[13.5px] text-blue-200 leading-snug">{l.title}</p>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1.5 text-[12.5px] font-semibold text-blue-700">
                  <GraduationCap className="h-4 w-4" strokeWidth={2} />
                  Featured Topic
                </div>
                <h4 className="mt-3 font-semibold text-slate-900 leading-snug">{l.topic}</h4>
                <blockquote className="mt-4 border-l-2 border-blue-200 pl-4 text-[14px] italic leading-6 text-blue-200">
                  "{l.quote}"
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-5 border-t border-blue-200 text-[13px]">
                  <span className="text-blue-200">{l.hosted}</span>
                  <span className="font-semibold text-white">{l.date}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
