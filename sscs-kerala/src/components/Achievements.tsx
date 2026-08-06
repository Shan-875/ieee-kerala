import {
  Award,
  Trophy,
  Star,
  BookOpen,
  Medal,
  Rocket,
  Code2,
  Users,
} from "lucide-react";

const iconMap: Record<string, typeof Award> = {
  Award, Trophy, Star, BookOpen, Medal, Rocket, Code2, Users,
};

type Achievement = {
  title: string;
  description?: string;
  icon: string;
  year: string;
  category?: string;
  tint?: string;
};

export default function Achievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="section-center max-w-3xl mx-auto">
          <span className="eyebrow-text">Achievements &amp; recognition</span>
          <h2 className="section-heading">Milestones that define our journey</h2>
          <p className="section-subheading">
            From national awards to student championships — a snapshot of the recognition earned by
            our chapter and its community across the years.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((a) => {
            const Icon = iconMap[a.icon] ?? Award;
            const category = a.category ?? "Achievement";
            const description = a.description ?? "More details coming soon.";
            return (
              <article key={a.title} className="group card-base p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 border border-blue-200 text-blue-700 transition-all group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 group-hover:shadow-lg">
                    <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                      {category}
                    </span>
                    <div className="mt-2 text-[13px] font-bold text-slate-900">{a.year}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-base font-bold leading-snug text-slate-900">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-6 text-blue-700">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
