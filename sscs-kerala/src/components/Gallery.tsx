import { ArrowUpRight } from "lucide-react";

const gallery = [
  {
    title: "SSCS Annual Workshop 2025",
    location: "IIT Palakkad",
    date: "Dec 2025",
    participants: 220,
    tone: "blue",
  },
  {
    title: "Distinguished Lecture by Prof. Razavi",
    location: "NIT Calicut",
    date: "Mar 2025",
    participants: 340,
    tone: "slate",
  },
  {
    title: "Open-Source Silicon Hackathon",
    location: "IIIT Kottayam",
    date: "Sep 2025",
    participants: 96,
    tone: "cyan",
  },
  {
    title: "VLSI Physical Design Workshop",
    location: "CUSAT, Kochi",
    date: "Jun 2025",
    participants: 110,
    tone: "violet",
  },
  {
    title: "IEEE Kerala Section Student Congress",
    location: "Trivandrum",
    date: "Oct 2025",
    participants: 600,
    tone: "blue",
  },
  {
    title: "PCB &amp; Embedded Systems Lab",
    location: "Amal Jyothi College",
    date: "Feb 2025",
    participants: 72,
    tone: "slate",
  },
  {
    title: "Industry Internship Fair",
    location: "Virtual + Kochi",
    date: "Nov 2025",
    participants: 450,
    tone: "cyan",
  },
  {
    title: "RFIC Design Summer School",
    location: "IISc Kochi Campus",
    date: "Jul 2025",
    participants: 55,
    tone: "violet",
  },
];

const toneMap: Record<string, string> = {
  blue: "bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900",
  slate: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950",
  cyan: "bg-gradient-to-br from-slate-900 via-sky-800 to-blue-700",
  violet: "bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950",
};

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow-text">Gallery &amp; highlights</span>
            <h2 className="section-heading !mt-3">Moments from our events &amp; programs</h2>
          </div>
          <a href="#" className="btn-outline self-start shrink-0">
            View full gallery
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g, idx) => (
            <article
              key={g.title}
              className={`group relative card-base overflow-hidden !p-0 aspect-[4/3] ${
                idx === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""
              }`}
            >
              <div className={`absolute inset-0 ${toneMap[g.tone]} transition-transform duration-500 group-hover:scale-[1.03]`}>
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25), transparent 40%)",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-white/75">
                  <span>{g.date}</span>
                  <span>{g.participants} attendees</span>
                </div>
                <h3 className="mt-2 font-bold leading-snug text-white">{g.title}</h3>
                <div className="mt-1.5 text-[13px] text-white/70">{g.location}</div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-900 shadow-md"
                  aria-label="Open gallery item"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
