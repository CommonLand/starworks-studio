import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Films", to: "/films" },
      { label: "News", to: "/news" },
      { label: "About", to: "/about" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events", to: "/events" },
      { label: "Creators", to: "/creators" },
      { label: "Join StarWorks", to: "/join" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="hair-t mt-px bg-background">
      <div className="grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <div className="display text-[1.2rem] tracking-[0.34em]">Starworks</div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A film studio and creative movement building original stories,
            experiences and platforms.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="label text-muted-foreground">{col.title}</div>
            <ul className="mt-6 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hair-t flex flex-col gap-3 px-6 py-6 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
        <span>&copy; {new Date().getFullYear()} StarWorks</span>
        <span>See it. Live it. Be part of it.</span>
      </div>
    </footer>
  );
}
