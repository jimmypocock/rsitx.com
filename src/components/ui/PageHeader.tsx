interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section
      className={`relative py-16 md:py-24 ${
        backgroundImage ? "text-white" : "bg-secondary-100 text-foreground"
      }`}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-primary-900/75"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p
            className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              backgroundImage ? "text-primary-300" : "text-primary-600"
            }`}
          >
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              backgroundImage ? "text-gray-200" : "text-foreground-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
