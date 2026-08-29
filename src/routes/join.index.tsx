import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Arrow } from "@/components/ArrowLink";
import { opportunities, opportunityCategories } from "@/content/opportunities";

export const Route = createFileRoute("/join/")({
  head: () => ({
    meta: [
      { title: "Join StarWorks — Opportunities" },
      {
        name: "description",
        content:
          "Open opportunities at StarWorks across writing, animation, production, performance, marketing and operations.",
      },
      { property: "og:title", content: "Join StarWorks" },
      { property: "og:description", content: "Browse opportunities and submit interest." },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const [filter, setFilter] = useState<string>("All");
  const list =
    filter === "All" ? opportunities : opportunities.filter((o) => o.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Opportunities"
        title="Join StarWorks"
        intro="Project and staff opportunities across the studio. Browse an opening, read the requirements and submit your interest."
      />
      <section className="hair-b flex flex-wrap gap-x-8 gap-y-4 px-6 py-8 lg:px-10">
        {["All", ...opportunityCategories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`label transition-colors ${
              filter === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </section>
      <section className="px-6 py-8 lg:px-10 lg:py-10">
        <ul>
          {list.map((o) => (
            <li key={o.slug} className="hair-b">
              <Link
                to="/join/$slug"
                params={{ slug: o.slug }}
                className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[1fr_auto_auto] md:items-center"
              >
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {o.category}
                  </div>
                  <div className="mt-3 text-xl uppercase tracking-[0.08em]">{o.title}</div>
                  <p className="mt-3 max-w-xl text-sm text-muted-foreground">{o.summary}</p>
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground md:px-10">
                  {o.type} · {o.location}
                </div>
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
