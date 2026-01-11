"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Lightbox, LightboxImage } from "./Lightbox";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/2";
  gap?: "sm" | "md" | "lg";
  showLightbox?: boolean;
  className?: string;
}

const columnClasses = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

const gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

export function ImageGallery({
  images,
  columns = 3,
  aspectRatio = "4/3",
  gap = "md",
  showLightbox = true,
  className = "",
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    if (showLightbox) {
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  }, [showLightbox]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  const lightboxImages: LightboxImage[] = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }));

  return (
    <>
      <div
        className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={`${aspectClasses[aspectRatio]} relative rounded-lg overflow-hidden shadow-md group ${
              showLightbox ? "cursor-pointer" : "cursor-default"
            }`}
            aria-label={showLightbox ? `View ${image.alt}` : undefined}
            disabled={!showLightbox}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${Math.floor(100 / columns)}vw`}
              loading={index < 6 ? "eager" : "lazy"}
            />
            {showLightbox && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {showLightbox && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}

// Compact gallery variant for showing fewer images with "View All" option
interface CompactGalleryProps {
  images: GalleryImage[];
  maxVisible?: number;
  onViewAll?: () => void;
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/2";
}

export function CompactGallery({
  images,
  maxVisible = 4,
  onViewAll,
  aspectRatio = "4/3",
}: CompactGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = images.slice(0, maxVisible);
  const remainingCount = images.length - maxVisible;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages: LightboxImage[] = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {visibleImages.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={`${aspectClasses[aspectRatio]} relative rounded-lg overflow-hidden shadow-sm group cursor-pointer ${
              index === maxVisible - 1 && remainingCount > 0 ? "relative" : ""
            }`}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            {index === maxVisible - 1 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  +{remainingCount}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {onViewAll && images.length > maxVisible && (
        <button
          onClick={onViewAll}
          className="mt-3 text-sm text-primary-600 hover:text-primary-500 font-medium"
        >
          View all {images.length} photos
        </button>
      )}

      <Lightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrevious={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        onNext={() =>
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      />
    </>
  );
}
