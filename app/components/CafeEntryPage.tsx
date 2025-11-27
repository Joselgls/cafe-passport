import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Cafe } from '../data/mockCafes';
import { StampItem } from './StampItem';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CoffeeCup } from './CoffeeCup';
import { PhotoLightbox } from './PhotoLightbox';
import { FilterDropdown } from './FilterDropdown';

interface CafeEntryPageProps {
  cafe: Cafe;
  onOpenStampModal: () => void;
  onFlipNext: () => void;
  onFlipPrev: () => void;
  canFlipNext: boolean;
  canFlipPrev: boolean;
  currentPage: number;
  totalPages: number;
  allCafes: Cafe[];
  onSelectCafe: (id: string) => void;
}

export function CafeEntryPage({ 
  cafe, 
  onOpenStampModal,
  onFlipNext,
  onFlipPrev,
  canFlipNext,
  canFlipPrev,
  currentPage,
  totalPages,
  allCafes,
  onSelectCafe
}: CafeEntryPageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mobileCountry, setMobileCountry] = useState('all');
  const [mobileCity, setMobileCity] = useState('all');

  const renderCups = (rating: number, size: number = 20, color: string = '#C7A650') => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      
      return (
        <CoffeeCup
          key={i}
          size={size}
          filled={filled}
          color={color}
        />
      );
    });
  };

  // Get unique countries and cities for mobile filters
  const countries = ['all', ...Array.from(new Set(allCafes.map(c => c.country)))];
  const cities = ['all', ...Array.from(new Set(allCafes.map(c => c.city)))];

  // Filter cafes for mobile
  const filteredMobileCafes = allCafes.filter(c => {
    const matchesCountry = mobileCountry === 'all' || c.country === mobileCountry;
    const matchesCity = mobileCity === 'all' || c.city === mobileCity;
    return matchesCountry && matchesCity;
  });

  const currentMobileIndex = filteredMobileCafes.findIndex(c => c.id === cafe.id);
  const canFlipNextMobile = currentMobileIndex < filteredMobileCafes.length - 1;
  const canFlipPrevMobile = currentMobileIndex > 0;

  const handleMobileFlipNext = () => {
    if (canFlipNextMobile) {
      onSelectCafe(filteredMobileCafes[currentMobileIndex + 1].id);
    }
  };

  const handleMobileFlipPrev = () => {
    if (canFlipPrevMobile) {
      onSelectCafe(filteredMobileCafes[currentMobileIndex - 1].id);
    }
  };

  // Generate mock stamps
  const mockStamps = Array.from({ length: 12 }, (_, i) => ({
    id: `stamp-${i}`,
    rating: Math.floor(Math.random() * 2) + 4,
    initials: ['AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP', 'QR', 'ST', 'UV', 'WX'][i],
    date: ['12 NOV', '08 NOV', '03 NOV', '28 OCT', '24 OCT', '19 OCT', '15 OCT', '10 OCT', '05 OCT', '01 OCT', '28 SEP', '24 SEP'][i],
    rotation: (Math.random() * 10 - 5)
  }));

  const maxStamps = Math.max(...Object.values(cafe.starDistribution));

  return (
    <div className="h-screen overflow-y-auto p-6 md:p-12 relative">
      {/* Mobile Filters - Only visible on mobile */}
      <div className="block md:hidden mb-6 pt-2">
        <div className="grid grid-cols-2 gap-3">
          <FilterDropdown
            label="Country"
            value={mobileCountry}
            options={countries}
            onChange={setMobileCountry}
          />
          <FilterDropdown
            label="City"
            value={mobileCity}
            options={cities}
            onChange={setMobileCity}
          />
        </div>
      </div>

      {/* Page navigation controls */}
      <div className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 flex justify-between items-center z-10">
        <button
          onClick={() => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
              handleMobileFlipPrev();
            } else {
              onFlipPrev();
            }
          }}
          disabled={window.innerWidth < 768 ? !canFlipPrevMobile : !canFlipPrev}
          className="p-2 rounded-full transition-all hover:bg-black/5"
          style={{
            opacity: (window.innerWidth < 768 ? canFlipPrevMobile : canFlipPrev) ? 1 : 0.3,
            cursor: (window.innerWidth < 768 ? canFlipPrevMobile : canFlipPrev) ? 'pointer' : 'not-allowed',
            color: '#0F1A2A'
          }}
          title="Previous café"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px',
            color: '#4B4B4B'
          }}
        >
          Entry {window.innerWidth < 768 ? currentMobileIndex + 1 : currentPage} of {window.innerWidth < 768 ? filteredMobileCafes.length : totalPages}
        </div>

        <button
          onClick={() => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
              handleMobileFlipNext();
            } else {
              onFlipNext();
            }
          }}
          disabled={window.innerWidth < 768 ? !canFlipNextMobile : !canFlipNext}
          className="p-2 rounded-full transition-all hover:bg-black/5"
          style={{
            opacity: (window.innerWidth < 768 ? canFlipNextMobile : canFlipNext) ? 1 : 0.3,
            cursor: (window.innerWidth < 768 ? canFlipNextMobile : canFlipNext) ? 'pointer' : 'not-allowed',
            color: '#0F1A2A'
          }}
          title="Next café"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Header */}
      <div className="mb-6 relative mt-10 md:mt-12">
        <div className="absolute top-0 right-0">
          <div
            className="px-2 md:px-3 py-1 uppercase tracking-wider text-xs md:text-sm"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '12px',
              color: '#0F1A2A',
              border: '1px solid rgba(15, 26, 42, 0.2)'
            }}
          >
            {cafe.entryCode}
          </div>
        </div>
        
        <h1 
          className="mb-2 pr-24 md:pr-32 text-2xl md:text-3xl"
          style={{ color: '#0F1A2A' }}
        >
          {cafe.name}
        </h1>
        
        <p 
          className="uppercase tracking-widest mb-3"
          style={{ 
            fontSize: '14px',
            color: '#4B4B4B',
            fontVariant: 'small-caps',
            letterSpacing: '0.1em'
          }}
        >
          {cafe.city}, {cafe.country}
        </p>

        <div
          className="inline-block px-4 py-2 uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            backgroundColor: 'rgba(183, 65, 65, 0.15)',
            color: '#B74141',
            border: '1px solid rgba(183, 65, 65, 0.3)',
            transform: 'rotate(-2deg)'
          }}
        >
          {cafe.dateVisited}
        </div>
      </div>

      {/* Photo Section */}
      <div className="mb-8">
        <ImageWithFallback
          src={cafe.heroImage}
          alt={cafe.name}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity"
          style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          onClick={() => setLightboxImage(cafe.heroImage)}
        />
        <div className="flex gap-2">
          {cafe.thumbnails.map((thumb, i) => (
            <ImageWithFallback
              key={i}
              src={thumb}
              alt={`${cafe.name} thumbnail ${i + 1}`}
              className="w-16 h-16 md:w-18 md:h-18 object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)' }}
              onClick={() => setLightboxImage(thumb)}
            />
          ))}
        </div>
      </div>

      {/* Flat-White Review Block */}
      <div className="mb-8">
        <h2
          className="mb-4 uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '14px',
            color: '#0F1A2A'
          }}
        >
          FLAT-WHITE STANDARD
        </h2>
        
        <div className="space-y-3 mb-4" style={{ color: '#0F1A2A' }}>
          <div>
            <span style={{ color: '#4B4B4B' }}>Espresso notes:</span> {cafe.review.espressoNotes}
          </div>
          <div>
            <span style={{ color: '#4B4B4B' }}>Milk texture:</span> {cafe.review.milkTexture}
          </div>
          <div>
            <span style={{ color: '#4B4B4B' }}>Balance:</span> {cafe.review.balance}
          </div>
          <div>
            <span style={{ color: '#4B4B4B' }}>Temperature:</span> {cafe.review.temperature}
          </div>
          <div>
            <span style={{ color: '#4B4B4B' }}>Cup type:</span> {cafe.review.cupType}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span
              className="uppercase tracking-wider"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '14px',
                color: '#4B4B4B'
              }}
            >
              Our Rating:
            </span>
            <div className="flex gap-1">
              {renderCups(cafe.rating)}
            </div>
            <span style={{ color: '#0F1A2A' }}>
              {cafe.rating.toFixed(1)} / 5
            </span>
          </div>

          <div>
            <span
              className="uppercase tracking-wider"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '12px',
                color: '#4B4B4B'
              }}
            >
              Reviewer:
            </span>{' '}
            <span style={{ color: '#0F1A2A' }}>
              {cafe.reviewer}
            </span>
          </div>
        </div>
      </div>

      {/* Place Assessment */}
      <div className="mb-8">
        <h2
          className="mb-3 uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '14px',
            color: '#0F1A2A'
          }}
        >
          Place Assessment
        </h2>
        <p style={{ color: '#0F1A2A' }}>
          {cafe.placeAssessment}
        </p>
      </div>

      {/* Community Rating Summary */}
      <div className="mb-8">
        <h2
          className="mb-3 uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '14px',
            color: '#0F1A2A'
          }}
        >
          Community Rating
        </h2>
        
        <div className="flex items-center gap-3 mb-2">
          <div className="flex gap-1">
            {renderCups(cafe.communityRating, 24)}
          </div>
          <span style={{ color: '#0F1A2A' }}>
            {cafe.communityRating.toFixed(1)}
          </span>
        </div>
        
        <p style={{ fontSize: '14px', color: '#4B4B4B' }}>
          Based on {cafe.communityStamps} stamps
        </p>

        <div className="mt-4 space-y-2">
          {[5, 4, 3, 2, 1].map(cups => (
            <div key={cups} className="flex items-center gap-3">
              <span 
                className="w-8 flex items-center"
                style={{ 
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '12px',
                  color: '#4B4B4B' 
                }}
              >
                {cups}<CoffeeCup size={12} filled color="#4B4B4B" />
              </span>
              <div 
                className="h-2 rounded-full flex-1"
                style={{ backgroundColor: 'rgba(15, 26, 42, 0.1)' }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(cafe.starDistribution[cups as keyof typeof cafe.starDistribution] / maxStamps) * 100}%`,
                    backgroundColor: '#C7A650'
                  }}
                />
              </div>
              <span 
                className="w-12 text-right"
                style={{ 
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '12px',
                  color: '#4B4B4B' 
                }}
              >
                {cafe.starDistribution[cups as keyof typeof cafe.starDistribution]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stamp CTA */}
      <div className="mb-6">
        {cafe.userStamped ? (
          <button
            onClick={onOpenStampModal}
            className="w-full h-11 uppercase tracking-wider transition-colors"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '14px',
              color: '#0F1A2A',
              border: '1px solid #0F1A2A',
              borderRadius: '4px',
              backgroundColor: 'transparent'
            }}
          >
            Edit Your Stamp
          </button>
        ) : (
          <button
            onClick={onOpenStampModal}
            className="w-full h-11 uppercase tracking-wider transition-colors"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '14px',
              color: '#F3F1E7',
              backgroundColor: '#0F1A2A',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Stamp This Café
          </button>
        )}
      </div>

      {/* Stamp Wall */}
      <div>
        <h2
          className="mb-4 uppercase tracking-wider"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '14px',
            color: '#0F1A2A'
          }}
        >
          Community Stamps
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {mockStamps.map(stamp => (
            <StampItem
              key={stamp.id}
              rating={stamp.rating}
              initials={stamp.initials}
              date={stamp.date}
              rotation={stamp.rotation}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <PhotoLightbox
          imageUrl={lightboxImage}
          alt={cafe.name}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}