import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink } from "@/components/ArrowLink";
import studioStage from "@/assets/studio-stage.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — StarWorks" },
      {
        name: "description",
        content:
          "StarWorks develops original films, stories, creators, experiences and entertainment properties.",
      },
      { property: "og:title", content: "About StarWorks" },
      {
        property: "og:description",
        content: "A film studio and creative movement building what comes next.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    n: "01",
    title: "Original Stories",
    body: "We develop and produce original features and series from the ground up.",
  },
  {
    n: "02",
    title: "Creators",
    body: "We build long-term work with writers, directors, animators and performers.",
  },
  {
    n: "03",
    title: "Experience",
    body: "Festivals, premieres and live culture that put the work in front of people.",
  },
  {
    n: "04",
    title: "Platform",
    body: "Releasing directly, so the studio and its creators keep what they build.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="hair-b grid grid-cols-1 lg:grid-cols-[1fr_50%]">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-10 lg:py-28">
          <div className="label text-muted-foreground">About</div>
          <h1 className="display mt-8 text-[clamp(2.6rem,7vw,5.4rem)]">
            <span className="block">A studio</span>
            <span className="block">And a movement.</span>
          </h1>
          <p className="mt-9 max-w-lg text-base leading-[1.9] text-foreground/85">
            StarWorks develops original films, stories, creators, experiences and
            entertainment properties. We build the work, the audience and the platform
            that carries them — and we keep ownership of what we make.
          </p>
        </div>
        <div className="min-h-[320px] overflow-hidden hair-l">
          <img
            src={studioStage}
            alt="StarWorks soundstage"
            loading="lazy"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="hair-b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.n} className="hair-b hair-r px-6 py-12 lg:px-8 lg:py-14">
            <div className="text-sm tracking-[0.14em] text-muted-foreground">{p.n}</div>
            <h2 className="display mt-8 text-2xl">{p.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="display max-w-4xl text-[clamp(2rem,5vw,3.8rem)]">
          Stories move culture. We build what’s next.
        </h2>
        <div className="mt-12 flex flex-wrap gap-10">
          <ArrowLink to="/films" underline>
            View Films
          </ArrowLink>
          <ArrowLink to="/join" underline>
            Join StarWorks
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
