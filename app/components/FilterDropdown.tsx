import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
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
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-2 pr-8 bg-transparent border-b outline-none appearance-none cursor-pointer capitalize transition-colors"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            borderColor: 'rgba(15, 26, 42, 0.3)',
            color: '#0F1A2A',
            fontSize: '14px'
          }}
        >
          {options.map(option => (
            <option key={option} value={option} className="capitalize">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          size={16}
          style={{ color: '#4B4B4B' }}
        />
      </div>
    </div>
  );
}
