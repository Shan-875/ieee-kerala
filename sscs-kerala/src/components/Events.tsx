import { Calendar, Clock, MapPin, ArrowRight, Users } from "lucide-react";

const featuredEvent = {
  title: "SSCS Kerala Winter Workshop on Advanced Analog IC Design",
  subtitle: "3-day hands-on workshop with industry experts from TI, ADI and Qualcomm",
  date: "21 – 23 Jan 2026",
  time: "9:00 AM – 6:00 PM (IST)",
  location: "Cochin University of Science and Technology (CUSAT), Kochi",
  audience: "Open to students, faculty and professionals with basic analog design knowledge",
  seats: 90,
  speakers: [
    "Dr. R. Sridharan — Texas Instruments",
    "Prof. L. Mary Sujatha — IISc Bangalore",
    "Dr. Gopalakrishnan — Analog Devices",
    "Karthik Subramanian — Qualcomm India",
  ],
  register: "#",
};

const events = [
  {
    date: "Feb 12",
    month: "2026",
    title: "Tech Talk: RISC-V based SoC Design Methodology",
    category: "Tech Talk",
    host: "NIT Calicut",
    mode: "Hybrid",
  },
  {
    date: "Mar 05",
    month: "2026",
    title: "Student Hackathon: Open-Source Silicon Design",
    category: "Hackathon",
    host: "IIIT Kottayam",
    mode: "In-person",
  },
  {
    date: "Apr 18",
    month: "2026",
    title: "SSCS Kerala AGM + Annual Research Symposium",
    category: "Symposium",
    host: "IIT Palakkad",
    mode: "In-person",
  },
  {
    date: "May 09",
    month: "2026",
    title: "PCB Design Workshop with Hands-On Lab",
    category: "Workshop",
    host: "Amal Jyothi College of Engg.",
    mode: "In-person",
  },
];

export default function Events() {
  return (
    <section id="events" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="eyebrow-text">Upcoming events</span>
          <h2 className="section-heading">Don't miss our flagship programs</h2>
          <p className="section-subheading">
            World-class workshops, technical talks, hackathons and symposiums — organized locally
            in partnership with premier institutions across Kerala.
          </p>
        </div>

        <div className="card-base p-8 sm:p-10 mb-6 relative overflow-hidden">
          <div
            className="pointer-events-none absolute right-0 top-0 w-80 h-80 opacity-[0.07] bg-gradient-to-br from-blue-600 to-slate-900 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr,1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11.5px] font-semibold text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                Featured Event
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
                {featuredEvent.title}
              </h3>
              <p className="mt-3 text-[15px] text-blue-200 leading-7">{featuredEvent.subtitle}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-[14px]">
                <div className="flex items-start gap-2.5">
                  <Calendar className="h-4.5 w-4.5 mt-0.5 text-blue-600 shrink-0" strokeWidth={2} />
                  <div>
                    <div className="font-semibold text-slate-900">Date</div>
                    <div className="text-blue-700">{featuredEvent.date}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4.5 w-4.5 mt-0.5 text-blue-600 shrink-0" strokeWidth={2} />
                  <div>
                    <div className="font-semibold text-slate-900">Time</div>
                    <div className="text-blue-700">{featuredEvent.time}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4.5 w-4.5 mt-0.5 text-blue-600 shrink-0" strokeWidth={2} />
                  <div>
                    <div className="font-semibold text-slate-900">Venue</div>
                    <div className="text-blue-700">{featuredEvent.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-slate-600">
                <Users className="h-4 w-4 text-blue-600" />
                Speakers &amp; Facilitators
              </div>
              <ul className="mt-4 space-y-3">
                {featuredEvent.speakers.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2.5 text-[14px] text-slate-900"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-[14px]">
                <div className="text-slate-600">
                  Seats left: <span className="font-semibold text-slate-900">{featuredEvent.seats}</span>
                </div>
              </div>
              <a
                href={featuredEvent.register}
                className="btn-blue w-full mt-5"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="relative mt-6 text-[13px] text-blue-300">{featuredEvent.audience}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((e) => (
            <div
              key={e.title}
              className="group card-base p-5 flex items-center gap-5"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-slate-900 text-white">
                <div className="text-lg font-extrabold leading-none">{e.date}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider opacity-70">
                  {e.month}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                    {e.category}
                  </span>
                  <span className="text-[11.5px] text-blue-200">{e.host}</span>
                </div>
                <h4 className="mt-2 font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {e.title}
                </h4>
                <div className="mt-2 text-[12.5px] text-blue-200">{e.mode}</div>
              </div>
              <a
                href="#"
                className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                aria-label="View event"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
