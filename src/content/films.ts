import nightWatch from "@/assets/film-night-watch.jpg";
import studioStage from "@/assets/studio-stage.jpg";

export type FilmStatus = "now-playing" | "latest" | "coming-soon" | "original";

export interface Film {
  slug: string;
  title: string;
  subtitle?: string;
  status: FilmStatus;
  statusLabel: string;
  year: string;
  runtime?: string;
  image: string;
  synopsis: string;
  credits: { role: string; name: string }[];
  trailerUrl?: string;
  /** Set price to enable a paid StarWorks release. Payment is wired later. */
  price?: string;
  watchAvailable?: boolean;
}

export const films: Film[] = [
  {
    slug: "night-watch-origins",
    title: "Night Watch",
    subtitle: "Origins",
    status: "now-playing",
    statusLabel: "Now Playing",
    year: "2026",
    runtime: "1H 52M",
    image: nightWatch,
    synopsis:
      "A city that never sleeps keeps its own record. Night Watch: Origins follows a lone investigator across a single rain-soaked night as the story of how the watch began is pulled out of the dark.",
    credits: [
      { role: "Director", name: "To be announced" },
      { role: "Written by", name: "To be announced" },
      { role: "Produced by", name: "StarWorks" },
    ],
    trailerUrl: "",
    price: "$6.99",
    watchAvailable: true,
  },
  {
    slug: "the-long-signal",
    title: "The Long Signal",
    status: "latest",
    statusLabel: "Latest Release",
    year: "2025",
    runtime: "1H 41M",
    image: studioStage,
    synopsis:
      "A transmission arrives from a place no one is listening to. A study of distance, memory and the people who keep broadcasting anyway.",
    credits: [
      { role: "Director", name: "To be announced" },
      { role: "Produced by", name: "StarWorks" },
    ],
    price: "$4.99",
    watchAvailable: true,
  },
  {
    slug: "untitled-starworks-original",
    title: "Untitled StarWorks Original",
    subtitle: "In Production",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    year: "2026",
    image: studioStage,
    synopsis:
      "An original StarWorks feature currently in production. Details to be announced.",
    credits: [{ role: "Produced by", name: "StarWorks" }],
  },
];

export const getFilm = (slug: string) => films.find((f) => f.slug === slug);
