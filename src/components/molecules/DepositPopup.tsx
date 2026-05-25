// Molecule: DepositPopup — content shown inside Leaflet popup when clicking a marker

import React from 'react';
import { Deposit } from '../../shared/types';
import { mineralByType } from '../../shared/data/minerals';

interface DepositPopupProps {
  deposit: Deposit;
}

const statusLabel: Record<string, string> = {
  active: 'Активная добыча',
  developing: 'В разработке',
  explored: 'Исследовано',
  exploring: 'Геологоразведка',
};

const statusColor: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  developing: 'bg-amber-100 text-amber-700',
  explored: 'bg-blue-100 text-blue-700',
  exploring: 'bg-stone-100 text-stone-600',
};

const DepositPopup: React.FC<DepositPopupProps> = ({ deposit }) => {
  const category = mineralByType[deposit.type];

  return (
    <div className="min-w-[260px] max-w-[300px] font-sans">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="font-semibold text-stone-800 text-base leading-tight">{deposit.name}</h3>
          <p className="text-xs text-stone-400 mt-0.5">{deposit.region}</p>
        </div>
        <span className="text-2xl flex-shrink-0">{category?.emoji}</span>
      </div>

      {/* Type + status badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            backgroundColor: category?.markerColor + '22',
            color: category?.markerColor,
            border: `1px solid ${category?.markerColor}44`,
          }}
        >
          {category?.labelRu}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[deposit.status] || ''}`}
        >
          {statusLabel[deposit.status] || deposit.status}
        </span>
        {deposit.discoveredYear && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
            c {deposit.discoveredYear} г.
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-stone-600 leading-relaxed mb-3">{deposit.description}</p>

      {/* Production info */}
      <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-100">
        <p className="text-xs font-medium text-stone-500 mb-1">📊 Запасы и добыча</p>
        <p className="text-xs text-stone-700 leading-relaxed">{deposit.production}</p>
      </div>
    </div>
  );
};

export default DepositPopup;
