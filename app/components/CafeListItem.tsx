import { Star } from 'lucide-react';
import { Cafe } from '../data/mockCafes';
import { CoffeeCup } from './CoffeeCup';

interface CafeListItemProps {
  cafe: Cafe;
  selected: boolean;
  onClick: () => void;
}

export function CafeListItem({ cafe, selected, onClick }: CafeListItemProps) {
  const renderCups = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <CoffeeCup
        key={i}
        size={14}
        filled={i < Math.floor(rating)}
        color="#C7A650"
      />
    ));
  };

  return (
    <button
      onClick={onClick}
      className="w-full py-4 flex items-start justify-between text-left transition-colors"
      style={{
        backgroundColor: selected ? 'rgba(15, 26, 42, 0.05)' : 'transparent'
      }}
    >
      <div className="flex-1">
        <div
          className="uppercase tracking-wider mb-1"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            color: '#4B4B4B'
          }}
        >
          {cafe.entryCode}
        </div>
        <div 
          className="mb-1"
          style={{ 
            color: '#0F1A2A'
          }}
        >
          {cafe.name}
        </div>
        <div 
          style={{ 
            fontSize: '14px',
            color: '#4B4B4B' 
          }}
        >
          {cafe.city}, {cafe.country}
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-0.5">
          {renderCups(cafe.rating)}
        </div>
        <div
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            color: '#4B4B4B'
          }}
        >
          {cafe.rating.toFixed(1)}
        </div>
      </div>
    </button>
  );
}