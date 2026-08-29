import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLink } from "@/components/ArrowLink";
import { getEvent } from "@/content/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Event unavailable — StarWorks" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — StarWorks Events` },
        { name: "description", content: event.description.slice(0, 155) },
        { property: "og:title", content: `${event.title} — StarWorks` },
        { property: "og:description", content: event.description.slice(0, 155) },
      ],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();

  return (
    <>
      <section className="hair-b">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            width={800}
            height={560}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="px-6 pb-14 lg:px-10 lg:pb-16">
          <div className="label -mt-10 text-muted-foreground">{event.category}</div>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.4rem)]">
            {event.title}
          </h1>
          {event.tagline && (
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-muted-foreground">
              {event.tagline}
            </p>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
        <div className="hair-b px-6 py-14 lg:hair-r lg:px-10 lg:py-16">
          <div className="label text-muted-foreground">About</div>
          <p className="mt-7 max-w-2xl text-base leading-[1.9] text-foreground/85">
            {event.description}
          </p>
        </div>
        <div className="px-6 py-14 lg:px-10 lg:py-16">
          <dl className="space-y-6">
            <div className="hair-b pb-5">
              <dt className="label text-muted-foreground">Date</dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.1em]">{event.dateRange}</dd>
            </div>
            <div className="hair-b pb-5">
              <dt className="label text-muted-foreground">Location</dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.1em]">{event.city}</dd>
            </div>
          </dl>
          {event.ticketsEnabled ? (
            <button
              type="button"
              className="label mt-10 inline-flex items-center gap-4 bg-foreground px-6 py-4 text-background"
            >
              Tickets / Register
            </button>
          ) : (
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Registration opens soon
            </p>
          )}
          <div className="mt-10">
            <ArrowLink to="/events" className="text-muted-foreground hover:text-foreground">
              All Events
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
