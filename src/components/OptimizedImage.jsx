import { useState } from 'react';
import Skeleton from './Skeleton';

export default function OptimizedImage({ src, alt, className = '', wrapperClassName = '', sizes = '100vw', eager = false, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const canResizeUnsplash = typeof src === 'string' && src.includes('images.unsplash.com');
  const srcSet = canResizeUnsplash
    ? `${src}&w=480 480w, ${src}&w=768 768w, ${src}&w=1200 1200w, ${src}&w=1600 1600w`
    : undefined;

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'} ${className}`}
        {...props}
      />
    </div>
  );
}
