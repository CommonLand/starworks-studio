import festival from "@/assets/event-festival.jpg";
import panel from "@/assets/event-panel.jpg";
import lounge from "@/assets/event-lounge.jpg";

export interface SWEvent {
  slug: string;
  month: string;
  day: string;
  title: string;
  city: string;
  dateRange: string;
  image: string;
  category: string;
  description: string;
  tagline?: string;
  ticketsEnabled: boolean;
  past?: boolean;
}

export const events: SWEvent[] = [
  {
    slug: "starworks-film-festival",
    month: "May",
    day: "16",
    title: "StarWorks Film Festival",
    city: "Atlanta, GA",
    dateRange: "May 16 – 18",
    image: festival,
    category: "Festival",
    tagline: "See it. Live it. Be part of it.",
    description:
      "Three days of films, creators, music, culture and experience. Screenings, premieres and conversations across the StarWorks slate and the wider independent community.",
    ticketsEnabled: true,
  },
  {
    slug: "panel-the-future-of-film",
    month: "Jun",
    day: "20",
    title: "Panel: The Future of Film",
    city: "Houston, TX",
    dateRange: "Jun 20",
    image: panel,
    category: "Panel",
    description:
      "Filmmakers, writers and producers on distribution, ownership and what the next decade of independent storytelling looks like.",
    ticketsEnabled: true,
  },
  {
    slug: "creator-lounge",
    month: "Aug",
    day: "15",
    title: "Creator Lounge",
    city: "Chicago, IL",
    dateRange: "Aug 15",
    image: lounge,
    category: "Creator Event",
    description:
      "An intimate evening for creators: screenings, works in progress and open conversation with the StarWorks team.",
    ticketsEnabled: false,
  },
  {
    slug: "night-watch-premiere",
    month: "Nov",
    day: "02",
    title: "Night Watch: Origins — Premiere",
    city: "Atlanta, GA",
    dateRange: "Nov 2",
    image: festival,
    category: "Premiere",
    description: "The premiere screening of Night Watch: Origins, followed by a Q&A.",
    ticketsEnabled: false,
    past: true,
  },
];

export const upcomingEvents = events.filter((e) => !e.past);
export const pastEvents = events.filter((e) => e.past);
export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
