import { useState } from 'react';
import { X } from 'lucide-react';
import { CoffeeCup } from './CoffeeCup';

interface StampModalProps {
  cafeName: string;
  onClose: () => void;
  onPlaceStamp: (rating: number) => void;
}

export function StampModal({ cafeName, onClose, onPlaceStamp }: StampModalProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onPlaceStamp(selectedRating);
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(15, 26, 42, 0.6)' }}
      onClick={onClose}
    >
      <div
        className="relative p-8 rounded-lg"
        style={{
          width: '420px',
          backgroundColor: '#F3F1E7',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          backgroundBlendMode: 'multiply',
          backgroundOpacity: 0.1
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-opacity hover:opacity-70"
          style={{ color: '#4B4B4B' }}
        >
          <X size={20} />
        </button>

        <h2 
          className="mb-2"
          style={{ color: '#0F1A2A' }}
        >
          Stamp your visit
        </h2>
        
        <p 
          className="mb-6"
          style={{ color: '#4B4B4B' }}
        >
          Rate the flat white you had at {cafeName}.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onMouseEnter={() => setHoveredRating(rating)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => setSelectedRating(rating)}
              className="transition-transform hover:scale-110"
            >
              <CoffeeCup
                size={32}
                filled={(hoveredRating || selectedRating) >= rating}
                color="#C7A650"
              />
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={selectedRating === 0}
            className="flex-1 h-11 uppercase tracking-wider transition-opacity"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '14px',
              color: '#F3F1E7',
              backgroundColor: '#0F1A2A',
              border: 'none',
              borderRadius: '4px',
              opacity: selectedRating === 0 ? 0.4 : 1,
              cursor: selectedRating === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Place Stamp
          </button>
          
          <button
            onClick={onClose}
            className="px-6 uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '14px',
              color: '#4B4B4B'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}