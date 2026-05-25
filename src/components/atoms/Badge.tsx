// Atom: Badge — colored tag for mineral type labeling

import React from 'react';
import { MineralCategory } from '../../shared/types';

interface BadgeProps {
  category: MineralCategory;
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({ category, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${sizeClasses} ${category.color}`}
    >
      <span>{category.emoji}</span>
      {category.labelRu}
    </span>
  );
};

export default Badge;
