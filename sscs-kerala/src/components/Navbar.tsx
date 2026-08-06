import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, contact } from "../data/siteData";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? "border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
          : "border-slate-200/60 bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container-pro flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="IEEE logo"
            className="h-11 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-md px-3.5 py-2 text-[14px] font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.links.join} className="btn-primary px-4 py-2 text-[13px]">
            Join SSCS
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 lg:hidden">
          <div className="container-pro flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={contact.links.join} className="btn-primary w-full">
                Join SSCS
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
