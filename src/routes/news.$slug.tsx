import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLink } from "@/components/ArrowLink";
import { getArticle } from "@/content/news";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable — StarWorks" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — StarWorks News` },
        { name: "description", content: article.excerpt.slice(0, 155) },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <article className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="label text-muted-foreground">
          {article.category} · {article.date}
        </div>
        <h1 className="display mt-8 text-[clamp(2.2rem,6vw,4.5rem)]">{article.title}</h1>
        <div className="hair-t mt-12 space-y-7 pt-12">
          {article.body.map((p, i) => (
            <p key={i} className="text-base leading-[1.95] text-foreground/85">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-16">
          <ArrowLink to="/news" className="text-muted-foreground hover:text-foreground">
            All News
          </ArrowLink>
        </div>
      </div>
    </article>
  );
}
