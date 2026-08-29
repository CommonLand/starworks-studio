import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Arrow, ArrowLink } from "@/components/ArrowLink";
import { ReelModal } from "@/components/ReelModal";
import { films } from "@/content/films";
import { upcomingEvents } from "@/content/events";
import heroScreen from "@/assets/hero-screen.jpg";
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
  position: string;
  overlay?: string[];
}

const slides: Slide[] = [
  {
    id: "01",
    headline: ["Stories", "Move culture.", "We build what’s next."],
    body: "StarWorks is a film studio and creative movement building original stories, experiences, and platforms that entertain, inspire, and leave a mark.",
    cta: { label: "Our Mission", to: "/about" },
    image: heroScreen,
    position: "center",
  },
  {
    id: "02",
    headline: ["Original", "Films built", "To be owned."],
    body: "StarWorks develops and releases original features directly — from first draft through premiere and release on our own platform.",
    cta: { label: "View Films", to: "/films" },
    image: filmStill,
    position: "center",
    overlay: ["Made", "By", "StarWorks."],
  },
  {
    id: "03",
    headline: ["Festivals.", "Premieres.", "Live culture."],
    body: "The StarWorks Film Festival and a year-round programme of screenings, panels and creator events across the country.",
    cta: { label: "View Events", to: "/events" },
    image: festival,
    position: "center",
    overlay: ["Films · Creators", "Music · Culture", "Experience"],
  },
  {
    id: "04",
    headline: ["Creators", "First.", "Always."],
    body: "Writers, directors, animators and performers building work with StarWorks — and a portal built for the people who make it.",
    cta: { label: "Meet Creators", to: "/creators" },
    image: lounge,
    position: "center",
    overlay: ["The people", "Behind", "The work."],
  },
  {
    id: "05",
    headline: ["StarWorks", "Is a studio", "And a movement."],
    body: "An independent studio building original entertainment properties and the platforms that carry them.",
    cta: { label: "About StarWorks", to: "/about" },
    image: studioStage,
    position: "center",
    overlay: ["Build", "What’s", "Next."],
  },
];

function Home() {
  const [active, setActive] = useState(0);
  const [reelOpen, setReelOpen] = useState(false);
  const slide = slides[active] ?? slides[0]!;
  const featured = films[0]!;

  return (
    <>
      {/* HERO */}
      <section className="hair-b grid grid-cols-1 lg:h-[430px] lg:grid-cols-[112px_1fr_58.3%]">
        {/* 01–05 rail */}
        <div className="hidden flex-col justify-between py-9 pl-9 hair-r lg:flex">
          <div className="flex flex-col gap-[26px]">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active}
                className="group flex items-center gap-2 text-left"
              >
                <span
                  className={
                    i === active
                      ? "h-[5px] w-[5px] rounded-full bg-foreground"
                      : "h-px w-[7px] bg-muted-foreground/60"
                  }
                />
                <span
                  className={`font-sans text-[13px] tracking-[0.14em] transition-colors ${
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
          <div className="flex flex-col gap-3">
            <span className="ml-[2px] h-14 w-px bg-hairline" />
            <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              Scroll
            </span>
          </div>
        </div>

        {/* Headline column */}
        <div className="flex flex-col justify-center px-6 py-14 lg:px-12 lg:py-0">
          <h1
            key={slide.id}
            className="display reveal text-[clamp(2.4rem,4.1vw,3.95rem)] leading-[1.3]"
          >
            {slide.headline.map((line) => (
              <span key={line} className="block lg:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[24rem] text-[13px] leading-[1.7] text-muted-foreground">
            {slide.body}
          </p>
          <div className="mt-7">
            <ArrowLink to={slide.cta.to} underline>
              {slide.cta.label}
            </ArrowLink>
          </div>
          <div className="mt-8 flex items-center gap-5 lg:hidden">
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
        <div className="relative h-[56vw] max-h-[430px] overflow-hidden lg:h-auto">
          <img
            key={slide.image}
            src={slide.image}
            alt=""
            width={1778}
            height={850}
            style={{ objectPosition: slide.position }}
            className="h-full w-full object-cover"
          />
          {slide.overlay && (
            <div className="absolute left-8 top-1/4 max-w-[60%]">
              {slide.overlay.map((line) => (
                <span
                  key={line}
                  className="block text-[clamp(1rem,1.6vw,1.5rem)] font-semibold uppercase leading-[1.35] tracking-[0.04em] text-background"
                >
                  {line}
                </span>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => setReelOpen(true)}
            className="group absolute bottom-5 right-6 flex items-center gap-4 lg:bottom-6 lg:right-8"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
              Watch Reel
            </span>
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            <Play className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
          </button>
        </div>
      </section>

      {/* NOW PLAYING / UPCOMING EVENTS */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hair-b px-6 py-8 lg:hair-r lg:px-9 lg:py-9">
          <div className="text-[11px] font-medium uppercase tracking-[0.24em]">
            Now Playing
          </div>
          <Link
            to="/films/$slug"
            params={{ slug: featured.slug }}
            className="group relative mt-6 block aspect-[16/5] overflow-hidden border border-hairline"
          >
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-7">
              <h2 className="display text-[clamp(1.5rem,2.2vw,2rem)] tracking-[0.05em]">
                {featured.title}
              </h2>
              {featured.subtitle && (
                <span className="mt-1 text-[13px] uppercase tracking-[0.2em] text-highlight">
                  {featured.subtitle}
                </span>
              )}
            </div>
            <div className="absolute bottom-6 left-7 flex items-center gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                Official Trailer
              </span>
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
            <span className="absolute right-[14%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/70 transition-colors group-hover:bg-foreground group-hover:text-background">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-current" strokeWidth={0} />
            </span>
          </Link>
        </div>

        <div className="px-6 py-8 lg:px-9 lg:py-9">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium uppercase tracking-[0.24em]">
              Upcoming Events
            </div>
            <ArrowLink to="/events" className="text-muted-foreground hover:text-foreground">
              View All Events
            </ArrowLink>
          </div>
          <ul className="mt-5">
            {upcomingEvents.slice(0, 3).map((e) => (
              <li key={e.slug} className="hair-b">
                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="group flex items-center gap-5 py-3"
                >
                  <div className="w-12 shrink-0 text-center">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {e.month}
                    </div>
                    <div className="display mt-0.5 text-[1.9rem] leading-none">{e.day}</div>
                  </div>
                  <div className="h-14 w-px bg-hairline" />
                  <div className="hidden h-[54px] w-[148px] shrink-0 overflow-hidden sm:block">
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
                    <div className="text-[14px] uppercase tracking-[0.1em] text-foreground">
                      {e.title}
                    </div>
                    <div className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                      {e.city}
                    </div>
                    <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
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
