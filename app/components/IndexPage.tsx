import { Search } from 'lucide-react';
import { Cafe } from '../data/mockCafes';
import { FilterDropdown } from './FilterDropdown';
import { RatingSlider } from './RatingSlider';
import { TagChip } from './TagChip';
import { StatsBox } from './StatsBox';
import { CafeListItem } from './CafeListItem';

interface IndexPageProps {
  cafes: Cafe[];
  selectedCafeId: string;
  onSelectCafe: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

const allTags = ['quiet', 'fruity', 'oat-friendly', 'classic', 'roastery'];

export function IndexPage({
  cafes,
  selectedCafeId,
  onSelectCafe,
  searchQuery,
  onSearchChange,
  selectedCountry,
  onCountryChange,
  selectedCity,
  onCityChange,
  minRating,
  onMinRatingChange,
  selectedTags,
  onToggleTag
}: IndexPageProps) {
  // Get unique countries and cities
  const countries = ['all', ...Array.from(new Set(cafes.map(c => c.country)))];
  const cities = ['all', ...Array.from(new Set(cafes.map(c => c.city)))];

  // Filter cafes
  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = 
      cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cafe.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cafe.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry = selectedCountry === 'all' || cafe.country === selectedCountry;
    const matchesCity = selectedCity === 'all' || cafe.city === selectedCity;
    const matchesRating = cafe.rating >= minRating;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => cafe.tags.includes(tag));

    return matchesSearch && matchesCountry && matchesCity && matchesRating && matchesTags;
  });

  // Calculate stats
  const totalStamps = cafes.reduce((sum, cafe) => sum + cafe.communityStamps, 0);
  const avgRating = cafes.reduce((sum, cafe) => sum + cafe.communityRating, 0) / cafes.length;
  const uniqueCountries = new Set(cafes.map(c => c.country)).size;

  return (
    <div className="h-screen flex flex-col p-12 overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h1 
          className="tracking-tight mb-1" 
          style={{ color: '#0F1A2A' }}
        >
          PASSPORT INDEX
        </h1>
        <p 
          className="tracking-wide"
          style={{ color: '#4B4B4B' }}
        >
          Flat-white entries sorted by location.
        </p>
      </div>

      {/* Search Field */}
      <div className="mb-8">
        <label 
          className="block uppercase tracking-wider mb-2"
          style={{ 
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            color: '#4B4B4B'
          }}
        >
          Search café / city / country
        </label>
        <div className="relative">
          <Search 
            className="absolute left-0 top-1/2 -translate-y-1/2" 
            size={16} 
            style={{ color: '#4B4B4B' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-6 pr-2 py-2 bg-transparent border-b outline-none transition-colors"
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              borderColor: 'rgba(15, 26, 42, 0.3)',
              color: '#0F1A2A'
            }}
            placeholder="Type to search..."
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FilterDropdown
            label="Country"
            value={selectedCountry}
            options={countries}
            onChange={onCountryChange}
          />
          <FilterDropdown
            label="City"
            value={selectedCity}
            options={cities}
            onChange={onCityChange}
          />
        </div>
        
        <RatingSlider
          value={minRating}
          onChange={onMinRatingChange}
        />
      </div>

      {/* Tags */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <TagChip
              key={tag}
              tag={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => onToggleTag(tag)}
            />
          ))}
        </div>
      </div>

      {/* Café List - Moved above stats */}
      <div className="flex-1 overflow-y-auto -mx-12 px-12 mb-8">
        <div className="space-y-0">
          {filteredCafes.map((cafe, index) => (
            <div key={cafe.id}>
              <CafeListItem
                cafe={cafe}
                selected={cafe.id === selectedCafeId}
                onClick={() => onSelectCafe(cafe.id)}
              />
              {index < filteredCafes.length - 1 && (
                <div 
                  className="h-px" 
                  style={{ backgroundColor: 'rgba(15, 26, 42, 0.2)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Box - Moved below list */}
      <div className="flex-shrink-0">
        <StatsBox
          cafesReviewed={cafes.length}
          countries={uniqueCountries}
          communityStamps={totalStamps}
          globalAvg={avgRating}
        />
      </div>
    </div>
  );
}