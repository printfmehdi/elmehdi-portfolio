interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export default function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <div className="border-b pb-10 pt-12 md:pt-16">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-4xl tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
