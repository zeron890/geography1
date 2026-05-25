// Molecule: FilterBar — filter deposits by mineral type

import React from 'react';
import { MineralCategory } from '../../shared/types';

interface FilterBarProps {
  categories: MineralCategory[];
  activeFilter: string | null;
  onFilter: (type: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeFilter, onFilter }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {/* "All" button */}
    <button
      onClick={() => onFilter(null)}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
        activeFilter === null
          ? 'bg-forest-700 text-white border-forest-700 shadow-md'
          : 'bg-white text-stone-600 border-stone-200 hover:border-forest-400 hover:text-forest-700'
      }`}
    >
      🗺️ Все
    </button>

    {categories.map((cat) => (
      <button
        key={cat.type}
        onClick={() => onFilter(activeFilter === cat.type ? null : cat.type)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
          activeFilter === cat.type
            ? 'text-white border-transparent shadow-md'
            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
        }`}
        style={
          activeFilter === cat.type
            ? { backgroundColor: cat.markerColor, borderColor: cat.markerColor }
            : {}
        }
      >
        {cat.emoji} {cat.labelRu}
      </button>
    ))}
  </div>
);

export default FilterBar;
