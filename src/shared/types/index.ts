// ============================================================
// Shared TypeScript interfaces and types for the entire app
// ============================================================

/** Available mineral resource categories */
export type MineralType =
  | 'gold'
  | 'coal'
  | 'oil'
  | 'gas'
  | 'mercury'
  | 'antimony'
  | 'copper'
  | 'iron'
  | 'uranium'
  | 'rare-earth';

/** Kyrgyzstan administrative regions (oblasts) */
export type Region =
  | 'Чуйская область'
  | 'Иссык-Кульская область'
  | 'Нарынская область'
  | 'Джалал-Абадская область'
  | 'Ошская область'
  | 'Баткенская область'
  | 'Таласская область';

/** A single mineral deposit on the map */
export interface Deposit {
  id: string;
  name: string;                  // Russian name of the deposit
  type: MineralType;
  region: Region;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;           // Short educational description
  production: string;            // Production/reserve info
  discoveredYear?: number;
  status: 'active' | 'developing' | 'explored';
}

/** Mineral category metadata for cards and legend */
export interface MineralCategory {
  type: MineralType;
  labelRu: string;              // Russian label
  emoji: string;
  color: string;                // Tailwind color class
  markerColor: string;          // Hex color for Leaflet marker
  description: string;          // Educational text in Russian
  usages: string[];             // What it's used for
  totalDeposits: number;
}

/** Statistics item for the stats section */
export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}
