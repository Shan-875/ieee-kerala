import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { announcements } from "../data/siteData";

export default function AnnouncementTicker() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    let offset = 0;
    const speed = 0.6;

    const tick = () => {
      if (!paused) {
        offset += speed;
        const half = el.scrollWidth / 2;
        if (offset >= half) offset = 0;
        el.scrollLeft = offset;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const items = [...announcements, ...announcements];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative z-20 border-b border-white/10 bg-gradient-to-r from-slate-950 via-ieee-blue-dark to-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-stretch gap-4">
        <div className="flex shrink-0 items-center gap-2 border-r border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-200">
            Latest
          </span>
        </div>
        <div
          ref={scrollerRef}
          className="flex min-w-0 flex-1 items-center gap-10 whitespace-nowrap py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((a, i) => (
            <span
              key={`${a}-${i}`}
              className="inline-flex items-center gap-2.5 text-sm font-medium text-white/90"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
