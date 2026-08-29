import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLink } from "@/components/ArrowLink";
import { getOpportunity } from "@/content/opportunities";

export const Route = createFileRoute("/join/$slug")({
  loader: ({ params }) => {
    const opportunity = getOpportunity(params.slug);
    if (!opportunity) throw notFound();
    return { opportunity };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Opportunity unavailable — StarWorks" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { opportunity } = loaderData;
    return {
      meta: [
        { title: `${opportunity.title} — Join StarWorks` },
        { name: "description", content: opportunity.summary.slice(0, 155) },
        { property: "og:title", content: `${opportunity.title} — StarWorks` },
        { property: "og:description", content: opportunity.summary.slice(0, 155) },
      ],
    };
  },
  component: OpportunityPage,
});

function OpportunityPage() {
  const { opportunity } = Route.useLoaderData();
  const [sent, setSent] = useState(false);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
      <div className="hair-b px-6 py-16 lg:hair-r lg:px-10 lg:py-24">
        <div className="label text-muted-foreground">
          {opportunity.category} · {opportunity.type} · {opportunity.location}
        </div>
        <h1 className="display mt-8 text-[clamp(2.2rem,6vw,4.5rem)]">{opportunity.title}</h1>
        <p className="mt-8 max-w-xl text-base leading-[1.9] text-foreground/85">
          {opportunity.summary}
        </p>
        <div className="hair-t mt-14 pt-10">
          <div className="label text-muted-foreground">Requirements</div>
          <ul className="mt-7 space-y-4">
            {opportunity.requirements.map((r) => (
              <li key={r} className="flex gap-4 text-sm text-foreground/85">
                <span className="mt-2 h-px w-5 shrink-0 bg-muted-foreground" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14">
          <ArrowLink to="/join" className="text-muted-foreground hover:text-foreground">
            All Opportunities
          </ArrowLink>
        </div>
      </div>

      <div className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="label text-muted-foreground">Submit Interest</div>
        {sent ? (
          <p className="mt-8 text-sm leading-relaxed text-foreground/85">
            Thank you. Your interest in {opportunity.title} has been noted. The StarWorks
            team will be in touch.
          </p>
        ) : (
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "link", label: "Portfolio / Reel URL", type: "url" },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="label text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required={f.name !== "link"}
                  className="mt-3 w-full border-b border-input bg-transparent pb-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                />
              </div>
            ))}
            <div>
              <label htmlFor="note" className="label text-muted-foreground">
                Message
              </label>
              <textarea
                id="note"
                name="note"
                rows={4}
                className="mt-3 w-full border-b border-input bg-transparent pb-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              className="label mt-4 w-full bg-foreground px-6 py-4 text-background"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
