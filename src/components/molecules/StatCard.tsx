// Molecule: StatCard — single animated statistic card

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../atoms/AnimatedCounter';

interface StatCardProps {
  icon: string;
  label: string;
  value: number;
  suffix?: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, suffix, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
  >
    <div className="text-4xl mb-3">{icon}</div>
    <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
      <AnimatedCounter target={value} suffix={suffix} />
    </div>
    <p className="text-stone-300 text-sm leading-snug">{label}</p>
  </motion.div>
);

export default StatCard;
