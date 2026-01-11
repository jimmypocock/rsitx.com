"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export interface BeforeAfterPair {
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
  title?: string;
}

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/2";
  className?: string;
}

const aspectClasses = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

export function BeforeAfterSlider({
  pair,
  aspectRatio = "4/3",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className={className}>
      {pair.title && (
        <h4 className="text-sm font-medium text-foreground-muted mb-2">
          {pair.title}
        </h4>
      )}
      <div
        ref={containerRef}
        className={`${aspectClasses[aspectRatio]} relative rounded-lg overflow-hidden shadow-md cursor-ew-resize select-none`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After image (full width, bottom layer) */}
        <div className="absolute inset-0">
          <Image
            src={pair.after.src}
            alt={pair.after.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            draggable={false}
          />
        </div>

        {/* Before image (clipped, top layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
            <Image
              src={pair.before.src}
              alt={pair.before.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
            />
          </div>
        </div>

        {/* Slider line and handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l-4 7 4 7m6-14l4 7-4 7"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
          Before
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
          After
        </div>
      </div>
    </div>
  );
}

// Grid of multiple before/after comparisons
interface BeforeAfterGridProps {
  pairs: BeforeAfterPair[];
  columns?: 1 | 2 | 3;
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/2";
  className?: string;
}

const gridColumnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

export function BeforeAfterGrid({
  pairs,
  columns = 2,
  aspectRatio = "4/3",
  className = "",
}: BeforeAfterGridProps) {
  return (
    <div className={`grid ${gridColumnClasses[columns]} gap-6 ${className}`}>
      {pairs.map((pair, index) => (
        <BeforeAfterSlider
          key={index}
          pair={pair}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  );
}
