"use client";

import { useState } from 'react';
import { IndexPage } from '@/app/components/IndexPage';
import { CafeEntryPage } from '@/app/components/CafeEntryPage';
import { StampModal } from '@/app/components/StampModal';
import { ClosedBook } from '@/app/components/ClosedBook';
import { mockCafes } from '@/app/data/mockCafes';

export default function PassportApp() {
  const [bookOpen, setBookOpen] = useState(false);
  const [selectedCafeId, setSelectedCafeId] = useState<string>('cafe-001');
  const [isStampModalOpen, setIsStampModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [minRating, setMinRating] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);

  const selectedCafe = mockCafes.find(cafe => cafe.id === selectedCafeId);
  const currentIndex = mockCafes.findIndex(cafe => cafe.id === selectedCafeId);

  const handlePlaceStamp = (rating: number) => {
    console.log('Stamp placed with rating:', rating);
    setIsStampModalOpen(false);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleFlipToNextCafe = () => {
    if (isFlipping || currentIndex >= mockCafes.length - 1) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedCafeId(mockCafes[currentIndex + 1].id);
      setIsFlipping(false);
    }, 600);
  };

  const handleFlipToPrevCafe = () => {
    if (isFlipping || currentIndex <= 0) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedCafeId(mockCafes[currentIndex - 1].id);
      setIsFlipping(false);
    }, 600);
  };

  const handleSelectCafe = (id: string) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedCafeId(id);
      setIsFlipping(false);
    }, 600);
  };

  if (!bookOpen) {
    return <ClosedBook onOpen={() => setBookOpen(true)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#E7E4D6' }}>
      {/* Paper grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Passport container */}
      <div className="relative flex gap-6 w-full max-w-[1440px]" style={{ perspective: '3000px' }}>
        {/* Left Page - Index (Hidden on mobile) */}
        <div 
          className="hidden md:block relative md:w-[45%] rounded-lg overflow-hidden"
          style={{ 
            backgroundColor: '#F3F1E7',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            transformStyle: 'preserve-3d'
          }}
        >
          <IndexPage
            cafes={mockCafes}
            selectedCafeId={selectedCafeId}
            onSelectCafe={handleSelectCafe}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            minRating={minRating}
            onMinRatingChange={setMinRating}
            selectedTags={selectedTags}
            onToggleTag={toggleTag}
          />
        </div>

        {/* Right Page - Café Entry with Flip Animation */}
        <div className="relative w-full md:w-[55%]" style={{ transformStyle: 'preserve-3d' }}>
          <div 
            className="relative rounded-lg overflow-hidden"
            style={{ 
              backgroundColor: '#F3F1E7',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              transformStyle: 'preserve-3d',
              transform: isFlipping ? 'rotateY(-15deg)' : 'rotateY(0deg)',
              transformOrigin: 'left center',
              transition: 'transform 0.6s ease-in-out'
            }}
          >
            {selectedCafe && (
              <CafeEntryPage
                cafe={selectedCafe}
                onOpenStampModal={() => setIsStampModalOpen(true)}
                onFlipNext={handleFlipToNextCafe}
                onFlipPrev={handleFlipToPrevCafe}
                canFlipNext={currentIndex < mockCafes.length - 1}
                canFlipPrev={currentIndex > 0}
                currentPage={currentIndex + 1}
                totalPages={mockCafes.length}
                allCafes={mockCafes}
                onSelectCafe={handleSelectCafe}
              />
            )}
          </div>
        </div>
      </div>

      {/* Stamp Modal */}
      {isStampModalOpen && (
        <StampModal
          cafeName={selectedCafe?.name || ''}
          onClose={() => setIsStampModalOpen(false)}
          onPlaceStamp={handlePlaceStamp}
        />
      )}
    </div>
  );
}
