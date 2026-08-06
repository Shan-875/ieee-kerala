import { ExternalLink, ArrowUpRight, Calendar } from "lucide-react";

type NewsItem = {
  title: string;
  excerpt?: string;
  summary?: string;
  category: string;
  date: string;
  link?: string;
  href?: string;
};

export default function NewsSection({ news }: { news: NewsItem[] }) {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <section id="news" className="section-padding bg-blue-50">
      <div className="container-pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow-text">News &amp; Updates</span>
            <h2 className="section-heading !mt-3">The latest from the chapter</h2>
            <p className="mt-4 text-[16px] leading-7 text-blue-700">
              Stay up-to-date with chapter announcements, awards, student achievements, and
              upcoming regional semiconductor events.
            </p>
          </div>
          <a href="#" className="btn-outline self-start shrink-0">
            Subscribe Newsletter
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-5 items-stretch">
          {featured && (
            <article className="group card-base p-8 lg:col-span-3 flex flex-col lg:flex-row gap-7 relative overflow-hidden">
              <div className="h-48 lg:h-auto lg:w-64 shrink-0 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.6), transparent 50%), radial-gradient(circle at 70% 80%, rgba(15,23,42,0.8), transparent 50%)",
                  }}
                  aria-hidden
                />
                <div className="relative text-white text-center p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <div className="mt-4 text-4xl font-extrabold tracking-tight leading-none">
                    {new Date(featured.date).getDate()}
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-widest opacity-75">
                    {new Date(featured.date).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-extrabold leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                  <a href={featured.link ?? featured.href ?? "#"} target="_blank" rel="noopener noreferrer">
                    {featured.title}
                  </a>
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {featured.excerpt ?? featured.summary ?? "More details coming soon."}
                </p>
                <a
                  href={featured.link ?? featured.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-6 flex items-center gap-2 text-[13px] font-semibold text-slate-900"
                >
                  Read full article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          )}

          <div className="lg:col-span-2 grid gap-4">
            {rest.map((n) => {
              const excerpt = n.excerpt ?? n.summary ?? "More details coming soon.";
              const href = n.link ?? n.href ?? "#";
              return (
              <article key={n.title} className="group card-base p-6">
                <div className="flex items-center justify-between gap-3 text-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 font-semibold text-blue-700">
                      {n.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-blue-600">
                      <Calendar className="h-3 w-3" /> {n.date}
                    </span>
                  </div>
                </div>
                <h4 className="mt-3 text-[15px] font-bold leading-snug text-slate-900 group-hover:text-blue-700 transition-colors">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {n.title}
                  </a>
                </h4>
                <p className="mt-2 text-[13.5px] leading-6 text-slate-500 line-clamp-2">
                  {excerpt}
                </p>
              </article>
            );})}
          </div>
        </div>
      </div>
    </section>
  );
}
