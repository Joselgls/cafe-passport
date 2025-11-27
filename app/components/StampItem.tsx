import { CoffeeCup } from './CoffeeCup';

interface StampItemProps {
  rating: number;
  initials: string;
  date: string;
  rotation: number;
}

export function StampItem({ rating, initials, date, rotation }: StampItemProps) {
  const renderCups = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <CoffeeCup
        key={i}
        size={10}
        filled={i < count}
        color="#C7A650"
      />
    ));
  };

  return (
    <div
      className="p-3 flex flex-col items-center justify-center gap-2 opacity-80 transition-all hover:opacity-100 hover:scale-105"
      style={{
        transform: `rotate(${rotation}deg)`,
        border: '2px solid rgba(183, 65, 65, 0.4)',
        backgroundColor: 'rgba(183, 65, 65, 0.08)',
        borderRadius: '4px',
        aspectRatio: '1'
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(15, 26, 42, 0.15)',
          color: '#0F1A2A',
          fontFamily: 'IBM Plex Mono, monospace'
        }}
      >
        {initials}
      </div>
      
      <div className="flex gap-0.5">
        {renderCups(rating)}
      </div>
      
      <div
        className="uppercase tracking-wider"
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '10px',
          color: '#4B4B4B'
        }}
      >
        {date}
      </div>
    </div>
  );
}