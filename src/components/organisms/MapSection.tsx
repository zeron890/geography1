// Organism: MapSection — main interactive Leaflet map with deposit markers

import React, { Suspense, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl } from 'react-leaflet';
import { motion } from 'framer-motion';
import { deposits } from '../../shared/data/deposits';
import { mineralCategories, mineralByType } from '../../shared/data/minerals';
import { Deposit } from '../../shared/types';
import SectionTitle from '../atoms/SectionTitle';
import FilterBar from '../molecules/FilterBar';
import DepositPopup from '../molecules/DepositPopup';
import LoadingSpinner from '../atoms/LoadingSpinner';

// Kyrgyzstan geographic center
const KG_CENTER: [number, number] = [41.2, 74.6];
const KG_ZOOM = 6;

// Map legend item component
const LegendItem: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
    <span className="text-xs text-stone-600 dark:text-stone-400">{label}</span>
  </div>
);

const MapSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedDeposit, setSelectedDeposit] = useState<Deposit | null>(null);

  // Filter deposits based on active filter
  const visibleDeposits = useMemo(
    () => (activeFilter ? deposits.filter((d) => d.type === activeFilter) : deposits),
    [activeFilter]
  );

  return (
    <section id="map" className="py-20 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Карта месторождений"
            subtitle="Нажмите на маркер, чтобы узнать подробную информацию о месторождении. Используйте фильтры для отображения конкретного типа ресурсов."
          />
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <FilterBar
            categories={mineralCategories}
            activeFilter={activeFilter}
            onFilter={setActiveFilter}
          />
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 dark:border-stone-700"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <MapContainer
              center={KG_CENTER}
              zoom={KG_ZOOM}
              style={{ height: '580px', width: '100%' }}
              zoomControl={false}
              className="z-0"
            >
              {/* Tile layer — CartoDB Positron (clean, light style) */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <ZoomControl position="topright" />

              {/* Deposit markers */}
              {visibleDeposits.map((deposit) => {
                const cat = mineralByType[deposit.type];
                return (
                  <CircleMarker
                    key={deposit.id}
                    center={deposit.coordinates}
                    radius={deposit.status === 'active' ? 10 : 8}
                    pathOptions={{
                      fillColor: cat?.markerColor || '#666',
                      fillOpacity: 0.85,
                      color: '#fff',
                      weight: 2,
                    }}
                    eventHandlers={{
                      mouseover: (e) => {
                        e.target.setStyle({ fillOpacity: 1, radius: 13 });
                      },
                      mouseout: (e) => {
                        e.target.setStyle({
                          fillOpacity: 0.85,
                          radius: deposit.status === 'active' ? 10 : 8,
                        });
                      },
                    }}
                  >
                    <Popup
                      maxWidth={320}
                      className="custom-popup"
                      closeButton={true}
                    >
                      <DepositPopup deposit={deposit} />
                    </Popup>
                  </CircleMarker>
                );
              })}
            </MapContainer>
          </Suspense>

          {/* Map legend overlay */}
          <div className="absolute bottom-4 left-4 z-10 bg-white/95 dark:bg-stone-800/95 backdrop-blur-sm rounded-xl p-3 border border-stone-200 dark:border-stone-700 shadow-md">
            <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2 uppercase tracking-wider">Легенда</p>
            <div className="space-y-1.5">
              {mineralCategories.map((cat) => (
                <LegendItem key={cat.type} color={cat.markerColor} label={cat.labelRu} />
              ))}
            </div>
          </div>

          {/* Deposit count badge */}
          <div className="absolute top-4 left-4 z-10 bg-forest-700/90 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
            Показано: {visibleDeposits.length} из {deposits.length} месторождений
          </div>
        </motion.div>

        {/* Helper text */}
        <p className="text-center text-sm text-stone-400 dark:text-stone-500 mt-4">
          Размер маркера отражает статус разработки • Круглые маркеры кликабельны
        </p>
      </div>
    </section>
  );
};

export default MapSection;
