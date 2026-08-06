import { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageSquareText } from "lucide-react";
import { contact } from "../data/siteData";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
      setTop(window.scrollY > 900);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`group flex h-11 w-11 items-center justify-center border border-[var(--color-line)] bg-[var(--color-white)] text-[var(--color-ink-500)] shadow-sm transition-all duration-300 hover:border-[var(--color-black)] hover:text-[var(--color-black)] hover:-translate-y-0.5 ${
          top ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.5} />
      </button>

      <a
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quick message"
        className={`group flex h-11 w-11 items-center justify-center border border-[var(--color-line)] bg-[var(--color-white)] text-[var(--color-ink-500)] shadow-sm transition-all duration-300 hover:border-[var(--color-black)] hover:text-[var(--color-black)] hover:-translate-y-0.5 ${
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <MessageSquareText className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
      </a>

      <a
        href={`mailto:${contact.email}`}
        aria-label="Contact chapter"
        className={`group flex h-12 w-12 items-center justify-center bg-[var(--color-black)] text-[var(--color-white)] shadow-lg transition-all duration-300 hover:bg-[var(--color-ink-700)] hover:-translate-y-0.5 ${
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={1.5} />
      </a>
    </div>
  );
}
