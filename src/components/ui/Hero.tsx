"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
  backgroundImages?: string[];
  rotationInterval?: number;
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
  backgroundImages,
  rotationInterval = 7000,
  overlay = true,
  size = "large",
}: HeroProps) {
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);
  const hasMultipleImages = images.length > 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  // Preload next image
  const preloadImage = useCallback((index: number) => {
    if (!loadedImages.has(index)) {
      setLoadedImages(prev => new Set([...prev, index]));
    }
  }, [loadedImages]);

  // Rotate images
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = (prev + 1) % images.length;
        // Preload the image after next
        const preloadIndex = (next + 1) % images.length;
        preloadImage(preloadIndex);
        return next;
      });
    }, rotationInterval);

    // Preload second image after initial render
    const preloadTimeout = setTimeout(() => {
      preloadImage(1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(preloadTimeout);
    };
  }, [hasMultipleImages, images.length, rotationInterval, preloadImage]);

  // Add extra top padding to account for fixed header (~104px)
  const sizeClasses = {
    small: "pt-32 pb-16 md:pt-36 md:pb-20",
    medium: "pt-40 pb-24 md:pt-44 md:pb-32",
    large: "pt-56 pb-44 md:pt-72 md:pb-64 lg:pt-80 lg:pb-72",
  };

  const hasImages = images.length > 0;

  return (
    <section
      className={`relative ${sizeClasses[size]} ${
        hasImages ? "text-white" : "bg-secondary-100 text-foreground"
      }`}
    >
      {hasImages && (
        <>
          {/* Image layers with Ken Burns effect */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {images.map((src, index) => (
              (loadedImages.has(index) || index === 0) && (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`object-cover ${
                      hasMultipleImages ? "animate-ken-burns" : ""
                    }`}
                    sizes="100vw"
                    style={{
                      animationDelay: `${index * -rotationInterval}ms`,
                    }}
                  />
                </div>
              )
            ))}
          </div>
          {/* Main overlay for overall darkening */}
          {overlay && (
            <div
              className="absolute inset-0 bg-black/30"
              aria-hidden="true"
            />
          )}
          {/* Top gradient for header text readability */}
          <div
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 via-black/20 to-transparent"
            aria-hidden="true"
          />
          {/* Bottom gradient for hero text readability */}
          <div
            className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p
              className={`mt-6 text-lg sm:text-xl ${
                hasImages ? "text-white" : "text-foreground-muted"
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
                      ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
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
