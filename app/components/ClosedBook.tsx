import { BookOpen } from 'lucide-react';

interface ClosedBookProps {
  onOpen: () => void;
}

export function ClosedBook({ onOpen }: ClosedBookProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: '#E7E4D6' }}
    >
      {/* Paper grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      <button
        onClick={onOpen}
        className="relative group"
        style={{ perspective: '1500px' }}
      >
        {/* Closed passport book */}
        <div
          className="relative transition-transform duration-500 group-hover:scale-105"
          style={{
            width: '480px',
            height: '680px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front cover */}
          <div
            className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-12"
            style={{
              backgroundColor: '#0F1A2A',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(199, 166, 80, 0.3)'
            }}
          >
            {/* Gold embossed title */}
            <div
              className="text-center mb-8"
              style={{
                color: '#C7A650',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div 
                className="uppercase tracking-widest mb-4"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '14px',
                  letterSpacing: '0.3em'
                }}
              >
                Travel Document
              </div>
              
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'Crimson Pro, serif',
                  fontSize: '52px',
                  fontWeight: 600,
                  lineHeight: 1.2
                }}
              >
                CAFÉ
                <br />
                PASSPORT
              </h1>
              
              <div 
                className="uppercase tracking-widest"
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '12px',
                  letterSpacing: '0.3em',
                  opacity: 0.8
                }}
              >
                Flat-White Edition
              </div>
            </div>

            {/* Decorative elements */}
            <div 
              className="w-32 h-32 rounded-full flex items-center justify-center mb-8"
              style={{
                border: '2px solid rgba(199, 166, 80, 0.4)'
              }}
            >
              <BookOpen size={48} style={{ color: '#C7A650' }} />
            </div>

            {/* Serial number */}
            <div
              className="uppercase tracking-widest"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                color: '#C7A650',
                opacity: 0.6,
                letterSpacing: '0.2em'
              }}
            >
              No. FW-2025-001284
            </div>

            {/* Click to open hint */}
            <div
              className="absolute bottom-8 left-0 right-0 text-center uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                color: '#C7A650',
                letterSpacing: '0.2em'
              }}
            >
              Click to open
            </div>
          </div>

          {/* Spine shadow */}
          <div
            className="absolute left-0 top-0 bottom-0 w-4"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent)',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px'
            }}
          />

          {/* Edge pages effect */}
          <div
            className="absolute right-0 top-2 bottom-2 w-2"
            style={{
              background: 'linear-gradient(to bottom, #F3F1E7 0%, #E5E3D7 50%, #F3F1E7 100%)',
              boxShadow: '-2px 0 4px rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </button>
    </div>
  );
}
