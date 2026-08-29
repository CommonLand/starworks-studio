import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Arrow } from "@/components/ArrowLink";
import { films, type FilmStatus } from "@/content/films";

export const Route = createFileRoute("/films/")({
  head: () => ({
    meta: [
      { title: "Films — StarWorks" },
      {
        name: "description",
        content:
          "Now playing, latest releases, coming soon and StarWorks Originals from the StarWorks film library.",
      },
      { property: "og:title", content: "Films — StarWorks" },
      {
        property: "og:description",
        content: "Original features and releases from StarWorks.",
      },
    ],
  }),
  component: FilmsPage,
});

const sections: { key: FilmStatus; title: string }[] = [
  { key: "now-playing", title: "Now Playing" },
  { key: "latest", title: "Latest Releases" },
  { key: "coming-soon", title: "Coming Soon" },
  { key: "original", title: "StarWorks Originals" },
];

function FilmsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Films"
        intro="Original features developed, produced and released by StarWorks."
      />
      {sections.map((section) => {
        const list = films.filter((f) => f.status === section.key);
        if (!list.length) return null;
        return (
          <section key={section.key} className="hair-b px-6 py-14 lg:px-10 lg:py-16">
            <div className="label text-muted-foreground">{section.title}</div>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {list.map((film) => (
                <Link
                  key={film.slug}
                  to="/films/$slug"
                  params={{ slug: film.slug }}
                  className="group block"
                >
                  <div className="aspect-[3/2] overflow-hidden border border-hairline">
                    <img
                      src={film.image}
                      alt={film.title}
                      loading="lazy"
                      width={1408}
                      height={912}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="display text-2xl tracking-[0.04em]">{film.title}</h2>
                      {film.subtitle && (
                        <div className="mt-1.5 text-xs uppercase tracking-[0.2em] text-highlight">
                          {film.subtitle}
                        </div>
                      )}
                      <div className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {film.year}
                        {film.runtime ? ` · ${film.runtime}` : ""} · {film.statusLabel}
                      </div>
                    </div>
                    <Arrow className="mt-2 text-foreground/70 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
