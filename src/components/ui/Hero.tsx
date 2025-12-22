import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  size?: "small" | "medium" | "large";
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = true,
  size = "large",
}: HeroProps) {
  const sizeClasses = {
    small: "py-16 md:py-20",
    medium: "py-24 md:py-32",
    large: "py-32 md:py-44",
  };

  return (
    <section
      className={`relative ${sizeClasses[size]} ${
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
          {overlay && (
            <div
              className="absolute inset-0 bg-primary-900/70"
              aria-hidden="true"
            />
          )}
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p
              className={`mt-6 text-lg sm:text-xl ${
                backgroundImage ? "text-gray-200" : "text-foreground-muted"
              }`}
            >
              {description}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-colors ${
                    backgroundImage
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-white text-foreground hover:bg-gray-50 ring-1 ring-gray-200"
                  }`}
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
