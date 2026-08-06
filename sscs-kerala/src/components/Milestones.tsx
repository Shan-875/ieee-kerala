type Milestone = {
  year: string;
  title: string;
  description?: string;
  detail?: string;
  category?: string;
};

export default function Milestones({ milestones }: { milestones: Milestone[] }) {
  return (
    <section id="milestones" className="section-padding bg-slate-900 text-white">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-400">
            Our journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] text-white">
            Key milestones through the years
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-slate-300 max-w-2xl mx-auto">
            From our founding as a small volunteer group to Kerala's largest semiconductor-focused
            technical chapter — a timeline of what we built together.
          </p>
        </div>

        <div className="relative mt-14 max-w-4xl mx-auto">
          <div
            className="absolute left-4 md:left-1/2 top-0 h-full w-px -translate-x-px md:-translate-x-1/2 bg-gradient-to-b from-blue-500/80 via-white/10 to-white/5"
            aria-hidden
          />
          <ul className="space-y-10 md:space-y-14">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 1;
              const description = m.description ?? m.detail ?? "More details coming soon.";
              const category = m.category ?? "Milestone";
              return (
                <li
                  key={`${m.year}-${m.title}`}
                  className="relative flex gap-6 md:gap-10 items-start"
                >
                  <div className="relative z-10 shrink-0">
                    <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-75" />
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 ring-8 ring-slate-900">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  </div>
                  <div
                    className={`flex-1 pb-4 md:w-1/2 ${
                      isRight ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10 md:text-right"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2.5 mb-2 ${
                        isRight ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="inline-flex items-center rounded-md bg-white/10 border border-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                        {category}
                      </span>
                      <span className="text-[24px] font-extrabold tracking-tight text-white">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-white">{m.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
