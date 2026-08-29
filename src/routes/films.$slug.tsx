import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Arrow, ArrowLink } from "@/components/ArrowLink";
import { ReelModal } from "@/components/ReelModal";
import { getFilm } from "@/content/films";
import { articles } from "@/content/news";

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => {
    const film = getFilm(params.slug);
    if (!film) throw notFound();
    return { film };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Film unavailable — StarWorks" }, { name: "robots", content: "noindex" }],
      };
    }
    const { film } = loaderData;
    return {
      meta: [
        { title: `${film.title} — StarWorks` },
        { name: "description", content: film.synopsis.slice(0, 155) },
        { property: "og:title", content: `${film.title} — StarWorks` },
        { property: "og:description", content: film.synopsis.slice(0, 155) },
      ],
    };
  },
  component: FilmDetail,
});

function FilmDetail() {
  const { film } = Route.useLoaderData();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="hair-b relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={film.image}
            alt={film.title}
            width={1408}
            height={912}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play trailer"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/70 transition-colors hover:bg-foreground hover:text-background"
          >
            <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={0} />
          </button>
        </div>
        <div className="px-6 pb-14 lg:px-10 lg:pb-16">
          <div className="label -mt-10 text-muted-foreground">{film.statusLabel}</div>
          <h1 className="display mt-6 text-[clamp(2.6rem,8vw,6rem)]">{film.title}</h1>
          {film.subtitle && (
            <div className="mt-3 text-sm uppercase tracking-[0.24em] text-highlight">
              {film.subtitle}
            </div>
          )}
          <div className="mt-6 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
            {film.year}
            {film.runtime ? ` · ${film.runtime}` : ""}
          </div>
        </div>
      </section>

      <section className="hair-b grid grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
        <div className="hair-b px-6 py-14 lg:hair-r lg:px-10 lg:py-16">
          <div className="label text-muted-foreground">Synopsis</div>
          <p className="mt-7 max-w-2xl text-base leading-[1.9] text-foreground/85">
            {film.synopsis}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group label inline-flex items-center gap-4 border-b border-foreground/60 pb-3"
            >
              Official Trailer
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            {film.watchAvailable && (
              <button
                type="button"
                className="label inline-flex items-center gap-4 bg-foreground px-6 py-4 text-background"
              >
                Buy / Watch{film.price ? ` — ${film.price}` : ""}
              </button>
            )}
          </div>
          {film.watchAvailable && (
            <p className="mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">
              Purchases give permanent access through a StarWorks account. Payment is
              not yet connected — this is the release surface it will connect to.
            </p>
          )}
        </div>
        <div className="px-6 py-14 lg:px-10 lg:py-16">
          <div className="label text-muted-foreground">Credits</div>
          <ul className="mt-7 space-y-5">
            {film.credits.map((c) => (
              <li key={c.role} className="hair-b pb-5">
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.role}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.1em]">{c.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-10 lg:py-16">
        <div className="flex items-center justify-between">
          <div className="label text-muted-foreground">Related News</div>
          <ArrowLink to="/news" className="text-muted-foreground hover:text-foreground">
            All News
          </ArrowLink>
        </div>
        <ul className="mt-8">
          {articles.slice(0, 2).map((a) => (
            <li key={a.slug} className="hair-t">
              <Link
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="group flex items-center justify-between gap-6 py-6"
              >
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {a.category} · {a.date}
                  </div>
                  <div className="mt-2 text-lg uppercase tracking-[0.08em]">{a.title}</div>
                </div>
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ReelModal
        open={open}
        onClose={() => setOpen(false)}
        title={`${film.title} — Trailer`}
        src={film.trailerUrl || undefined}
      />
    </>
  );
}
