import { Star } from 'lucide-react';

interface RatingSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function RatingSlider({ value, onChange }: RatingSliderProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#C7A650' : 'none'}
        stroke="#C7A650"
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div>
      <label
        className="block uppercase tracking-wider mb-2"
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '12px',
          color: '#4B4B4B'
        }}
      >
        Show cafés rated above:
      </label>
      
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #C7A650 0%, #C7A650 ${((value - 1) / 4) * 100}%, rgba(15, 26, 42, 0.2) ${((value - 1) / 4) * 100}%, rgba(15, 26, 42, 0.2) 100%)`
          }}
        />
        <div className="flex gap-1">
          {renderStars(value)}
        </div>
      </div>
    </div>
  );
}
