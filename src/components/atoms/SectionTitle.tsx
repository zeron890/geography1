// Atom: SectionTitle — styled section heading with optional subtitle

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2
      className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-stone-800'
      }`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-stone-300' : 'text-stone-500'
        }`}
      >
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full bg-forest-600 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

export default SectionTitle;
