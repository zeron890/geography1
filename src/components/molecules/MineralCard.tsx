// Molecule: MineralCard — educational card for a mineral category

import React from 'react';
import { motion } from 'framer-motion';
import { MineralCategory } from '../../shared/types';

interface MineralCardProps {
  category: MineralCategory;
  index: number;
}

const MineralCard: React.FC<MineralCardProps> = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
    className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm cursor-default"
  >
    {/* Icon & title row */}
    <div className="flex items-center gap-3 mb-4">
      <div className="text-4xl">{category.emoji}</div>
      <div>
        <h3 className="font-semibold text-stone-800 text-lg leading-tight">{category.labelRu}</h3>
        <p className="text-xs text-stone-400 mt-0.5">{category.totalDeposits} месторождений</p>
      </div>
    </div>

    {/* Description */}
    <p className="text-stone-600 text-sm leading-relaxed mb-4">{category.description}</p>

    {/* Usage chips */}
    <div className="flex flex-wrap gap-1.5">
      {category.usages.map((use) => (
        <span
          key={use}
          className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
        >
          {use}
        </span>
      ))}
    </div>

    {/* Color indicator bar */}
    <div
      className="mt-5 h-1 w-12 rounded-full"
      style={{ backgroundColor: category.markerColor }}
    />
  </motion.div>
);

export default MineralCard;
