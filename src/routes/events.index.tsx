import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Arrow } from "@/components/ArrowLink";
import { pastEvents, upcomingEvents, type SWEvent } from "@/content/events";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — StarWorks" },
      {
        name: "description",
        content:
          "The StarWorks Film Festival, premieres, screenings, panels and creator events.",
      },
      { property: "og:title", content: "Events — StarWorks" },
      {
        property: "og:description",
        content: "Films · Creators · Music · Culture · Experience.",
      },
    ],
  }),
  component: EventsPage,
});

function EventRow({ e }: { e: SWEvent }) {
  return (
    <li className="hair-b">
      <Link
        to="/events/$slug"
        params={{ slug: e.slug }}
        className="group flex items-center gap-6 py-6"
      >
        <div className="w-16 shrink-0 text-center">
          <div className="label text-muted-foreground">{e.month}</div>
          <div className="display mt-1 text-[2.4rem] leading-none">{e.day}</div>
        </div>
        <div className="h-20 w-px bg-hairline" />
        <div className="hidden h-[86px] w-[190px] shrink-0 overflow-hidden sm:block">
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
          <div className="text-[1.05rem] uppercase tracking-[0.12em]">{e.title}</div>
          <div className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            {e.city} · {e.dateRange}
          </div>
          <div className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            {e.category}
          </div>
        </div>
        <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </li>
  );
}

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programme"
        title="Events"
        intro="Festival, premieres, screenings, panels and creator gatherings. See it. Live it. Be part of it."
      />
      <section className="hair-b px-6 py-14 lg:px-10 lg:py-16">
        <div className="label text-muted-foreground">Upcoming</div>
        <ul className="mt-8">
          {upcomingEvents.map((e) => (
            <EventRow key={e.slug} e={e} />
          ))}
        </ul>
      </section>
      {pastEvents.length > 0 && (
        <section className="px-6 py-14 lg:px-10 lg:py-16">
          <div className="label text-muted-foreground">Past Events</div>
          <ul className="mt-8">
            {pastEvents.map((e) => (
              <EventRow key={e.slug} e={e} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
