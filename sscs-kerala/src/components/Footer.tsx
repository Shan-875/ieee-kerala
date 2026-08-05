import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Share2,
  ArrowUp,
  Cpu,
  MapPin,
  Globe,
  Link as LinkIcon,
} from "lucide-react";
import { contact } from "../data/siteData";

const socials = [
  { label: "LinkedIn", href: contact.links.linkedin, Icon: Share2 },
  { label: "Twitter / X", href: contact.links.twitter, Icon: Globe },
  { label: "Facebook", href: contact.links.facebook, Icon: Share2 },
  { label: "YouTube", href: contact.links.youtube, Icon: LinkIcon },
  { label: "Instagram", href: contact.links.instagram, Icon: Globe },
];

const quickLinks = [
  { label: "IEEE", href: contact.links.ieee },
  { label: "IEEE SSCS", href: contact.links.sscs },
  { label: "IEEE Kerala Section", href: contact.links.kerala },
  { label: "IEEE Membership", href: contact.links.join },
  { label: "SSCS Membership", href: contact.links.sscsMembership },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-ieee-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white shadow-2xl shadow-ieee-blue/30 ring-1 ring-white/10">
            <Cpu className="h-7 w-7" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            IEEE SSCS Kerala Chapter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            IEEE and its members inspire a global community through highly-cited publications,
            conferences, technology standards, and professional and educational activities. Together
            we advance innovation and excellence in solid-state circuits for the benefit of humanity.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get Started
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ieee-blue/80">
                Social Media
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition hover:-translate-y-0.5 hover:border-ieee-blue/40 hover:bg-ieee-blue hover:text-white hover:shadow-xl hover:shadow-ieee-blue/30"
                  >
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ieee-blue group-hover:bg-ieee-blue group-hover:text-white transition">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-ieee-blue/80">
                      Email
                    </div>
                    <div className="mt-0.5 font-medium">{contact.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ieee-blue">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-ieee-blue/80">
                      Office
                    </div>
                    <div className="mt-0.5 font-medium">{contact.address}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-ieee-blue-dark/40 via-ieee-blue/30 to-cyan-600/20 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-extrabold text-white">
                Ready to grow with SSCS Kerala?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Join as a member, start a chapter, or collaborate on an event today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={contact.links.sscsMembership}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-ieee-blue shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Join SSCS
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} IEEE SSCS Kerala Chapter. All rights reserved. Designed with{" "}
            <span className="text-ieee-blue font-semibold">IEEE SSCS Kerala</span> volunteers.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur transition hover:-translate-y-0.5 hover:bg-ieee-blue hover:text-white hover:border-ieee-blue/40"
          >
            Go to top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
