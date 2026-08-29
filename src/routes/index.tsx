import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Arrow, ArrowLink } from "@/components/ArrowLink";
import { ReelModal } from "@/components/ReelModal";
import { films } from "@/content/films";
import { upcomingEvents } from "@/content/events";
import heroArena from "@/assets/hero-arena.jpg";
import filmStill from "@/assets/film-night-watch.jpg";
import festival from "@/assets/event-festival.jpg";
import studioStage from "@/assets/studio-stage.jpg";
import lounge from "@/assets/event-lounge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StarWorks — Stories Move Culture" },
      {
        name: "description",
        content:
          "StarWorks is a film studio and creative movement building original stories, experiences and platforms that entertain, inspire and leave a mark.",
      },
      { property: "og:title", content: "StarWorks — Stories Move Culture" },
      {
        property: "og:description",
        content: "Original films, events and creators. See it. Live it. Be part of it.",
      },
    ],
  }),
  component: Home,
});

interface Slide {
  id: string;
  headline: string[];
  body: string;
  cta: { label: string; to: string };
  image: string;
  overlay: string[];
}

const slides: Slide[] = [
  {
    id: "01",
    headline: ["Stories", "Move culture.", "We build what’s next."],
    body: "StarWorks is a film studio and creative movement building original stories, experiences, and platforms that entertain, inspire, and leave a mark.",
    cta: { label: "Our Mission", to: "/about" },
    image: heroArena,
    overlay: ["See it.", "Live it.", "Be part of it."],
  },
  {
    id: "02",
    headline: ["Original", "Films built", "To be owned."],
    body: "StarWorks develops and releases original features directly — from first draft through premiere and release on our own platform.",
    cta: { label: "View Films", to: "/films" },
    image: filmStill,
    overlay: ["Made", "By", "StarWorks."],
  },
  {
    id: "03",
    headline: ["Festivals.", "Premieres.", "Live culture."],
    body: "The StarWorks Film Festival and a year-round programme of screenings, panels and creator events across the country.",
    cta: { label: "View Events", to: "/events" },
    image: festival,
    overlay: ["Films · Creators", "Music · Culture", "Experience"],
  },
  {
    id: "04",
    headline: ["Creators", "First.", "Always."],
    body: "Writers, directors, animators and performers building work with StarWorks — and a portal built for the people who make it.",
    cta: { label: "Meet Creators", to: "/creators" },
    image: lounge,
    overlay: ["The people", "Behind", "The work."],
  },
  {
    id: "05",
    headline: ["StarWorks", "Is a studio", "And a movement."],
    body: "An independent studio building original entertainment properties and the platforms that carry them.",
    cta: { label: "About StarWorks", to: "/about" },
    image: studioStage,
    overlay: ["Build", "What’s", "Next."],
  },
];

function Home() {
  const [active, setActive] = useState(0);
  const [reelOpen, setReelOpen] = useState(false);
  const slide = slides[active];
  const featured = films[0];

  return (
    <>
      {/* HERO */}
      <section className="hair-b grid grid-cols-1 lg:h-[calc(100vh-76px)] lg:min-h-[560px] lg:grid-cols-[118px_1fr_57%]">
        {/* Section indicator rail */}
        <div className="hidden flex-col justify-between py-12 pl-6 hair-r lg:flex">
          <div className="flex flex-col gap-[1.35rem]">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className="group flex items-center gap-2.5 text-left"
              >
                <span
                  className={`transition-all duration-300 ${
                    i === active
                      ? "h-[5px] w-[5px] rounded-full bg-foreground"
                      : "h-px w-2 bg-muted-foreground/70"
                  }`}
                />
                <span
                  className={`font-sans text-sm tracking-[0.12em] transition-colors ${
                    i === active
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground/80"
                  }`}
                >
                  {s.id}
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="ml-[2px] h-24 w-px bg-hairline" />
            <span className="label text-muted-foreground">Scroll</span>
          </div>
        </div>

        {/* Headline column */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-0">
          <h1 key={slide.id} className="display reveal text-[clamp(2.7rem,7.2vw,5.4rem)]">
            {slide.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-9 max-w-[26rem] text-sm leading-[1.85] text-muted-foreground">
            {slide.body}
          </p>
          <div className="mt-11">
            <ArrowLink to={slide.cta.to} underline>
              {slide.cta.label}
            </ArrowLink>
          </div>
          <div className="mt-10 flex items-center gap-5 lg:hidden">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`text-sm tracking-[0.12em] ${
                  i === active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[58vw] max-h-[640px] overflow-hidden hair-l lg:h-auto lg:max-h-none">
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div className="absolute left-6 top-12 max-w-[60%] lg:left-14 lg:top-1/4">
            {slide.overlay.map((line) => (
              <span
                key={line}
                className="block text-[clamp(1rem,2vw,1.65rem)] font-semibold uppercase leading-[1.35] tracking-[0.06em] text-background"
              >
                {line}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setReelOpen(true)}
            className="group absolute bottom-6 right-6 flex items-center gap-4 lg:bottom-8 lg:right-10"
          >
            <span className="label">Watch Reel</span>
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            <Play className="h-4 w-4 fill-current" strokeWidth={0} />
          </button>
        </div>
      </section>

      {/* NOW PLAYING / UPCOMING EVENTS */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hair-b px-6 py-12 lg:hair-r lg:px-10 lg:py-14">
          <div className="label text-foreground">Now Playing</div>
          <Link
            to="/films/$slug"
            params={{ slug: featured.slug }}
            className="group relative mt-8 block aspect-[16/9] overflow-hidden border border-hairline"
          >
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-7 lg:p-9">
              <h2 className="display text-[clamp(1.6rem,3vw,2.2rem)] tracking-[0.06em]">
                {featured.title}
              </h2>
              {featured.subtitle && (
                <span
                  className="mt-2 text-sm uppercase tracking-[0.22em] text-highlight">
                  {featured.subtitle}
                </span>
              )}
            </div>
            <div className="absolute bottom-7 left-7 flex items-center gap-4 lg:bottom-9 lg:left-9">
              <span className="label">Official Trailer</span>
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
            <span className="absolute right-7 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/70 transition-colors group-hover:bg-foreground group-hover:text-background lg:right-12">
              <Play className="ml-0.5 h-4 w-4 fill-current" strokeWidth={0} />
            </span>
          </Link>
        </div>

        <div className="px-6 py-12 lg:px-10 lg:py-14">
          <div className="flex items-center justify-between">
            <div className="label text-foreground">Upcoming Events</div>
            <ArrowLink to="/events" className="text-muted-foreground hover:text-foreground">
              View All Events
            </ArrowLink>
          </div>
          <ul className="mt-8">
            {upcomingEvents.slice(0, 3).map((e) => (
              <li key={e.slug} className="hair-b first:hair-t">
                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="group flex items-center gap-5 py-5"
                >
                  <div className="w-14 shrink-0 text-center">
                    <div className="label text-muted-foreground">{e.month}</div>
                    <div className="display mt-1 text-[2rem] leading-none">{e.day}</div>
                  </div>
                  <div className="h-16 w-px bg-hairline" />
                  <div className="hidden h-[64px] w-[150px] shrink-0 overflow-hidden sm:block">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      width={800}
                      height={560}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.95rem] uppercase tracking-[0.12em] text-foreground">
                      {e.title}
                    </div>
                    <div className="mt-1.5 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {e.city}
                    </div>
                    <div className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {e.dateRange}
                    </div>
                  </div>
                  <Arrow className="text-foreground/70 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReelModal open={reelOpen} onClose={() => setReelOpen(false)} />
    </>
  );
}
