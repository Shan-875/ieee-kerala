import { motion } from "framer-motion";
import { Share2, Mail } from "lucide-react";
import type { TeamMember } from "../data/siteData";

interface TeamSectionProps {
  id: string;
  title: string;
  members: TeamMember[];
  year?: string;
}

const gradients = [
  "from-ieee-blue to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-indigo-600",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-blue-600",
  "from-fuchsia-500 to-purple-600",
  "from-lime-500 to-green-600",
];

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
    <section id={id} className="py-24 even:bg-surface odd:bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h2>
          {year && (
            <span className="mt-4 inline-flex items-center rounded-full border border-ieee-blue/20 bg-ieee-blue/10 px-4 py-1.5 text-sm font-bold text-ieee-blue">
              {year}
            </span>
          )}
          <p className="mt-4 text-slate-600">
            Meet the team advancing SSCS Kerala forward through leadership, coordination, and volunteering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {members.map((member, index) => {
            const gradient = gradients[index % gradients.length];
            const initials = initialsOf(member.name);
            return (
              <motion.article
                key={`${member.name}-${member.role}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue/30 hover:shadow-[0_25px_50px_-20px_rgba(0,98,155,0.25)]"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                  />
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/95 bg-white text-slate-900 shadow-lg shadow-black/10">
                      <span className="font-display text-2xl font-extrabold tracking-tight text-slate-800">
                        {initials || "?"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 text-center">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-slate-900">
                    {member.name.replace(/_/g, " ")}
                  </h3>
                  <p className="mt-1.5 text-xs leading-snug font-semibold text-ieee-blue">
                    {member.role}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={member.linkedin || "#"}
                      aria-label="Social"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-ieee-blue hover:bg-ieee-blue hover:text-white"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label="Email"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-ieee-blue hover:bg-ieee-blue hover:text-white"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
