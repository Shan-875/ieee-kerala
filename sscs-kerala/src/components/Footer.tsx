import {
  Mail,
  ExternalLink,
  ArrowUp,
  MapPin,
  ArrowUpRight,
  Share2,
  Link as LinkIcon,
  Globe,
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

const sitemapLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Conferences", href: "#conferences" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Student Execom", href: "#student-execom" },
  { label: "Professional Execom", href: "#professional-execom" },
  { label: "SB Chapters", href: "#sb-chapters" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_35%),linear-gradient(135deg,_#0f172a_0%,_#111827_50%,_#0f172a_100%)] text-white">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container-pro relative py-20">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/20">
              <span className="text-sm font-semibold uppercase tracking-[0.32em]">IEEE</span>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-white">
                Solid-State Circuits Society Kerala Chapter
              </p>
              <p className="mt-0.5 text-[12px] tracking-[0.16em] text-slate-400">
                A professionally organized IEEE chapter advancing semiconductor education and research.
              </p>
            </div>
          </div>
          <h2 className="mt-10 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl text-white">
            Advancing solid-state circuits from Kerala to the world.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-slate-400">
            IEEE and its members inspire a global community through highly-cited publications,
            conferences, technology standards, and professional and educational activities.
          </p>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Get Started
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[14px] text-slate-300 transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500" strokeWidth={1.5} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-2 text-[14px] text-slate-300 transition-colors hover:text-white">
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-5" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Connect With Us
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group inline-flex h-11 w-11 items-center justify-center border border-white/10 text-slate-400 transition-all hover:border-sky-400/40 hover:text-sky-300"
                >
                  <Icon className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-[13px] leading-[1.8] text-slate-500">
              Follow our channels for workshops, announcements, and chapter updates.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact Info
            </h3>
            <ul className="mt-6 space-y-6">
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-start gap-4 transition-colors">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10">
                    <Mail className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Email
                    </div>
                    <div className="mt-1 text-[14px] text-slate-300 transition-colors group-hover:text-white">
                      {contact.email}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10">
                    <MapPin className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Office
                    </div>
                    <div className="mt-1 text-[14px] leading-[1.7] text-slate-300">
                      {contact.address}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden border border-white/10 bg-slate-900/60 p-8 sm:p-10">
          <div className="absolute top-0 right-0 h-px w-24 bg-gradient-to-l from-white/20 to-transparent" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Connect with IEEE SSCS Kerala
              </h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-400">
                Join the chapter, explore collaboration, or request support for student engagement.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={contact.links.sscsMembership}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-white-solid"
              >
                Join SSCS
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </a>
              <a href={`mailto:${contact.email}`} className="btn-white-outline">
                Email the Chapter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-10 sm:flex-row">
          <p className="text-[13px] text-slate-500">&copy; {year} IEEE SSCS Kerala Chapter. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2.5 text-[13px] text-slate-400 transition-colors hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 transition-all group-hover:-translate-y-1" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}
