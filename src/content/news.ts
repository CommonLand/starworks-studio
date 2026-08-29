export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "night-watch-origins-trailer",
    title: "Night Watch: Origins — Official Trailer",
    category: "Trailers",
    date: "Feb 12, 2026",
    excerpt:
      "The first look at the StarWorks original arrives, with a release window to follow.",
    body: [
      "StarWorks has released the official trailer for Night Watch: Origins, the studio's next original feature.",
      "The film will be released directly through StarWorks, with a theatrical festival run preceding the digital release.",
    ],
  },
  {
    slug: "starworks-film-festival-announced",
    title: "StarWorks Film Festival Returns",
    category: "Festival",
    date: "Jan 28, 2026",
    excerpt:
      "Films, creators, music, culture, experience. Three days in Atlanta.",
    body: [
      "The StarWorks Film Festival returns for three days of screenings, premieres, panels and performances.",
      "Submissions for the independent programme open ahead of the festival; full programming will be announced in the spring.",
    ],
  },
  {
    slug: "creator-program-expands",
    title: "The StarWorks Creator Program Expands",
    category: "Company",
    date: "Jan 09, 2026",
    excerpt:
      "New opportunities across writing, animation, production and performance.",
    body: [
      "StarWorks is expanding its creator program with additional project-based opportunities across the studio.",
      "Open roles and project calls are listed in the opportunities area of this site.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
