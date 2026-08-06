import { useEffect, useRef } from "react";
import { announcements } from "../data/siteData";
import { Megaphone } from "lucide-react";

export default function AnnouncementTicker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let pos = 0;
    const loop = () => {
      pos -= 0.5;
      if (el.scrollWidth && -pos >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!announcements.length) return null;

  const pool = [...announcements, ...announcements];

  return (
    <div className="relative overflow-hidden bg-blue-950 text-sky-100 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.9)]">
      <div className="container-pro flex items-center py-3">
        <div className="flex shrink-0 items-center gap-2 pr-4 border-r border-sky-500/10">
          <Megaphone className="h-4 w-4 text-sky-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
            Latest News
          </span>
        </div>
        <div className="relative ml-4 overflow-hidden flex-1">
          <div
            ref={ref}
            className="flex items-center whitespace-nowrap will-change-transform"
          >
            {pool.map((a, i) => (
              <div key={`${a}-${i}`} className="flex items-center gap-6 px-6">
                <span className="text-[13px] text-white/85">{a}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
