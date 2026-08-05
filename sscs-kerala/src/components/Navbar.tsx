import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Cpu } from "lucide-react";
import { navLinks, contact } from "../data/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const baseText = scrolled ? "text-slate-700" : "text-white/90";
  const baseHover = scrolled
    ? "hover:bg-slate-100 hover:text-ieee-blue"
    : "hover:bg-white/10 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue via-ieee-blue to-ieee-blue-dark text-white shadow-lg shadow-ieee-blue/25 ring-1 ring-white/20 transition group-hover:scale-105">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-cyan-400 to-ieee-blue opacity-0 blur transition-opacity duration-300 group-hover:opacity-60" />
          </div>
          <div className="hidden sm:block">
            <p
              className={`text-[15px] font-extrabold leading-tight tracking-tight ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              IEEE SSCS
            </p>
            <p className={`text-xs ${scrolled ? "text-slate-500" : "text-white/80"}`}>
              Kerala Chapter
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${baseText} ${baseHover}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`mailto:${contact.email}`}
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-slate-600" : "text-white/80"
            }`}
          >
            <Mail className="h-4 w-4" />
            <span className="hidden 2xl:inline">{contact.email}</span>
          </a>
          <a
            href={contact.links.join}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-ieee-blue/25 transition hover:shadow-ieee-blue/40"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
            Join IEEE SSCS
          </a>
        </div>

        <button
          type="button"
          className={`rounded-xl p-2.5 xl:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[64px] z-40 overflow-y-auto border-t border-slate-200 bg-white xl:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-slate-100 last:border-none pb-1 last:pb-0">
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Mail className="h-4 w-4 text-ieee-blue" />
                  {contact.email}
                </a>
                <a
                  href={contact.links.join}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark py-3 text-sm font-bold text-white shadow-md shadow-ieee-blue/20"
                >
                  Join IEEE SSCS
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
