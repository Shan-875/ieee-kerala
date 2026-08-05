import { useEffect, useState } from "react";
import { Cpu, ArrowUp, MessageCircle } from "lucide-react";
import { contact } from "../data/siteData";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
      setTop(window.scrollY > 1000);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-xl ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ieee-blue hover:text-white hover:ring-ieee-blue/30 ${
          top ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>

      <a
        href={`mailto:${contact.email}`}
        aria-label="Contact chapter"
        className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-br from-ieee-blue to-ieee-blue-dark hover:brightness-110 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-xl bg-slate-900/95 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 ring-1 ring-white/10">
          Contact SSCS Kerala
        </span>
      </a>

      <a
        href={contact.links.sscsMembership}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join IEEE SSCS"
        className={`group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-xl ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-ieee-blue hover:ring-ieee-blue/30 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white">
          <Cpu className="h-3.5 w-3.5" />
        </span>
        Join SSCS
      </a>
    </div>
  );
}
