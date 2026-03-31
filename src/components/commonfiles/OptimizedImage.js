'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * OptimizedImage — drop-in replacement for raw <img> tags.
 *
 * Uses next/image under the hood for:
 *  • Automatic WebP / AVIF conversion
 *  • Responsive srcsets (serves right size for viewport)
 *  • Native lazy-loading with a smooth blur-up shimmer
 *
 * Props:
 *  src       — image URL (Firebase or any external)
 *  alt       — alt text
 *  fill      — true to fill parent container (object-fit: cover)
 *  width/height — explicit dimensions (when fill=false)
 *  className — extra classes for the wrapper
 *  imgClassName — extra classes for the <Image> itself
 *  sizes     — responsive sizes hint (default: 100vw)
 *  priority  — set true for above-the-fold hero images
 *  quality   — compression level (default 75)
 *  fallback  — fallback src when image fails to load
 */
const PLACEHOLDER_SRC =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';

export default function OptimizedImage({
  src,
  alt = '',
  fill = true,
  width,
  height,
  className = '',
  imgClassName = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  quality = 75,
  fallback = PLACEHOLDER_SRC,
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallback) setImgSrc(fallback);
  };

  // Wrapper classes for the shimmer effect
  const wrapperClass = `relative overflow-hidden ${className}`;

  const imageProps = {
    src: imgSrc,
    alt,
    quality,
    sizes,
    priority,
    onError: handleError,
    onLoad: () => setIsLoaded(true),
    className: `transition-opacity duration-500 ease-in-out ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    } ${imgClassName}`,
    style: fill ? { objectFit: 'cover' } : undefined,
  };

  return (
    <div className={wrapperClass}>
      {/* Shimmer placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-inherit" />
      )}

      {fill ? (
        <Image {...imageProps} fill />
      ) : (
        <Image {...imageProps} width={width} height={height} />
      )}
    </div>
  );
}
