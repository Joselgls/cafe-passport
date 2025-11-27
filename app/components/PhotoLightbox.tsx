import { X } from 'lucide-react';

interface PhotoLightboxProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

export function PhotoLightbox({ imageUrl, alt, onClose }: PhotoLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(15, 26, 42, 0.9)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-white/10"
        style={{ color: '#F3F1E7' }}
      >
        <X size={32} />
      </button>

      <img
        src={imageUrl}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-lg"
        style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
