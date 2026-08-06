import {
  BadgeCheck,
  BookOpenCheck,
  GraduationCap,
  Network,
  Newspaper,
  Wallet,
} from "lucide-react";
import { contact } from "../data/siteData";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Global IEEE SSCS Membership",
    desc: "Full IEEE SSCS membership credentials with access to SSCS digital library, publications and member-only events.",
  },
  {
    icon: Newspaper,
    title: "Publications & Journals",
    desc: "Complimentary access to IEEE Journal of Solid-State Circuits, SSC Magazine and online reference materials.",
  },
  {
    icon: BookOpenCheck,
    title: "Premium Workshops & Tutorials",
    desc: "Member-only technical workshops on analog design, VLSI, PCB design, RISC-V, chip design flows and more.",
  },
  {
    icon: Network,
    title: "Industry Network",
    desc: "Exclusive networking with semiconductor leaders across the globe through our Distinguished Lecturer program.",
  },
  {
    icon: GraduationCap,
    title: "Student & Research Grants",
    desc: "Travel grants for conference authors, best-paper awards, and research seed-funding opportunities.",
  },
  {
    icon: Wallet,
    title: "Discounted Conference Fees",
    desc: "Up to 40% off registration for ISSCC, CICC, VLSI Symposia, ESSCIRC and flagship IEEE events.",
  },
];

export default function MembershipBenefits() {
  return (
    <section id="membership" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] items-start">
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow-text">Member benefits</span>
            <h2 className="section-heading !mt-3">Everything you need to grow in semiconductors</h2>
            <p className="mt-4 text-[16px] leading-7 text-blue-700">
              IEEE SSCS Kerala membership gives you access to a comprehensive toolkit of resources
              designed to accelerate your career, research and technical expertise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contact.links.sscsMembership} className="btn-blue">
                View membership plans
              </a>
              <a href={`mailto:${contact.email}`} className="btn-outline">
                Speak to coordinator
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group card-base p-6 flex flex-col h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all group-hover:bg-blue-900 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900 leading-snug">{b.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-blue-700">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
