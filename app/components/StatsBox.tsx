import { Star } from 'lucide-react';
import { CoffeeCup } from './CoffeeCup';

interface StatsBoxProps {
  cafesReviewed: number;
  countries: number;
  communityStamps: number;
  globalAvg: number;
}

export function StatsBox({ cafesReviewed, countries, communityStamps, globalAvg }: StatsBoxProps) {
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
    <div
      className="p-4 rounded"
      style={{
        backgroundColor: 'rgba(15, 26, 42, 0.06)',
        border: '1px solid rgba(15, 26, 42, 0.15)'
      }}
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span
            className="uppercase tracking-wider"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              color: '#4B4B4B'
            }}
          >
            Cafés reviewed:
          </span>
          <span style={{ color: '#0F1A2A' }}>
            {cafesReviewed}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span
            className="uppercase tracking-wider"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              color: '#4B4B4B'
            }}
          >
            Countries:
          </span>
          <span style={{ color: '#0F1A2A' }}>
            {countries}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span
            className="uppercase tracking-wider"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              color: '#4B4B4B'
            }}
          >
            Community stamps:
          </span>
          <span style={{ color: '#0F1A2A' }}>
            {communityStamps}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span
            className="uppercase tracking-wider"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              color: '#4B4B4B'
            }}
          >
            Global avg:
          </span>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {renderCups(globalAvg)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}