interface TagChipProps {
  tag: string;
  selected: boolean;
  onClick: () => void;
}

export function TagChip({ tag, selected, onClick }: TagChipProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full capitalize transition-colors"
      style={{
        fontSize: '12px',
        border: '1px solid rgba(15, 26, 42, 0.3)',
        color: selected ? '#F3F1E7' : '#0F1A2A',
        backgroundColor: selected ? '#0F1A2A' : 'transparent'
      }}
    >
      {tag}
    </button>
  );
}
