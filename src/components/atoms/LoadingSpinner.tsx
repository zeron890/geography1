// Atom: LoadingSpinner — shown while the map tiles are loading

import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-64 gap-4">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-4 border-stone-200" />
      <div className="absolute inset-0 rounded-full border-4 border-forest-600 border-t-transparent animate-spin" />
    </div>
    <p className="text-stone-500 text-sm">Загрузка карты...</p>
  </div>
);

export default LoadingSpinner;
