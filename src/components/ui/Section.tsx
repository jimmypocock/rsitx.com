interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "alt" | "primary";
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    alt: "bg-secondary-100",
    primary: "bg-primary-600 text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-foreground-muted ${
            centered ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
