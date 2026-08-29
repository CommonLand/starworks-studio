export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="hair-b px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
      <div className="label text-muted-foreground">{eyebrow}</div>
      <h1 className="display mt-8 max-w-5xl text-[clamp(3rem,9vw,7.5rem)]">{title}</h1>
      {intro && (
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </section>
  );
}
