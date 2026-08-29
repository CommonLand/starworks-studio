import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Arrow } from "@/components/ArrowLink";
import { articles } from "@/content/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — StarWorks" },
      {
        name: "description",
        content:
          "Film announcements, trailers, festival updates, releases and company news from StarWorks.",
      },
      { property: "og:title", content: "News — StarWorks" },
      { property: "og:description", content: "The StarWorks editorial desk." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Editorial"
        title="News"
        intro="Announcements, trailers, festival updates and company news."
      />
      <section className="px-6 py-8 lg:px-10 lg:py-10">
        <ul>
          {articles.map((a) => (
            <li key={a.slug} className="hair-b">
              <Link
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="group grid grid-cols-1 gap-4 py-10 md:grid-cols-[200px_1fr_auto] md:items-start"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {a.category}
                  <div className="mt-2">{a.date}</div>
                </div>
                <div>
                  <h2 className="display text-[clamp(1.5rem,3vw,2.4rem)]">{a.title}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                </div>
                <Arrow className="mt-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
