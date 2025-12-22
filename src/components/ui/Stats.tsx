interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  stats: Stat[];
  variant?: "default" | "primary";
}

export function Stats({ stats, variant = "default" }: StatsProps) {
  const isPrimary = variant === "primary";

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p
            className={`text-4xl font-bold tracking-tight ${
              isPrimary ? "text-white" : "text-primary-600"
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`mt-2 text-sm font-medium ${
              isPrimary ? "text-primary-200" : "text-foreground"
            }`}
          >
            {stat.label}
          </p>
          {stat.description && (
            <p
              className={`mt-1 text-xs ${
                isPrimary ? "text-primary-300" : "text-foreground-muted"
              }`}
            >
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
