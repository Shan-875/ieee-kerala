import { Share2, Mail } from "lucide-react";
import type { TeamMember } from "../data/siteData";

interface TeamSectionProps {
  id: string;
  title: string;
  members: TeamMember[];
  year?: string;
}

const initialsOf = (name: string) =>
  name
    .replace(/_/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);

export default function TeamSection({ id, title, members, year }: TeamSectionProps) {
  return (
    <section id={id} className="section-pad bg-slate-100 text-slate-900">
      <div className="container-pro">
        <div className="section-header">
          {year && (
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
              {year}
            </span>
          )}
          <h2 className="heading-2 mt-4">{title}</h2>
          <p className="section-lead">
            Meet the team advancing SSCS Kerala forward through leadership, coordination, and volunteering.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {members.map((member) => {
            const initials = initialsOf(member.name);
            return (
              <article
                key={`${member.name}-${member.role}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1"
              >
                <div className="relative flex h-32 items-center justify-center bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-slate-700 text-white text-xl font-semibold tracking-wide">
                    {initials || "?"}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-base font-semibold text-slate-900 leading-tight">
                    {member.name.replace(/_/g, " ")}
                  </h3>
                  <p className="mt-2 text-[12px] font-medium uppercase tracking-wide text-slate-500">
                    {member.role}
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <a
                      href={member.linkedin || "#"}
                      aria-label="Social"
                      className="flex h-9 w-9 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink-400)] transition-colors hover:border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]"
                    >
                      <Share2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label="Email"
                        className="flex h-9 w-9 items-center justify-center border border-[var(--color-line)] text-[var(--color-ink-400)] transition-colors hover:border-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-white)]"
                      >
                        <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
