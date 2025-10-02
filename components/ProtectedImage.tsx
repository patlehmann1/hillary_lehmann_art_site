'use client';

import { useState } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function ProtectedImage({ src, alt, category }: ProtectedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto select-none"
        onLoad={() => setImageLoaded(true)}
        draggable={false}
      />

      {imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/30 text-4xl md:text-6xl font-bold transform -rotate-12">
            © Hillary Anne Lehmann
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
    </div>
  );
}
