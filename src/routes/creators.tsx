import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLink } from "@/components/ArrowLink";
import { creators } from "@/content/creators";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Creators — StarWorks" },
      {
        name: "description",
        content:
          "Filmmakers, writers, animators, directors and performers building original work with StarWorks.",
      },
      { property: "og:title", content: "Creators — StarWorks" },
      {
        property: "og:description",
        content: "The people building StarWorks stories.",
      },
    ],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Creators"
        intro="Selected filmmakers, writers, animators, directors, performers and collaborators working with StarWorks."
      />
      <section className="hair-b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {creators.map((c, i) => (
          <article
            key={`${c.name}-${i}`}
            className="hair-b hair-r px-6 py-12 lg:px-10 lg:py-14"
          >
            <div className="label text-muted-foreground">{c.discipline}</div>
            <h2 className="display mt-6 text-3xl">{c.name}</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
          </article>
        ))}
      </section>
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <h2 className="display max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
          Work with StarWorks
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Opportunities across writing, animation, production, performance, marketing
          and operations.
        </p>
        <div className="mt-10">
          <ArrowLink to="/join" underline>
            View Opportunities
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
