// Organism: HeroSection — full-height landing section

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const handleScrollToMap = () => {
    document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-forest-900 to-stone-900" />

      {/* Topographic pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34,197,94,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(161,218,128,0.2) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(21,128,61,0.2) 0%, transparent 40%)`,
        }}
      />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mountain silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-48" fill="rgba(255,255,255,0.15)">
          <path d="M0,320 L0,200 L120,120 L240,180 L360,80 L480,140 L600,60 L720,100 L840,40 L960,90 L1080,30 L1200,80 L1320,50 L1440,70 L1440,320 Z" />
          <path d="M0,320 L0,240 L180,160 L360,200 L540,120 L720,160 L900,100 L1080,150 L1260,110 L1440,130 L1440,320 Z" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-stone-300 mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
          Образовательный проект · Геология · Кыргызстан
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Полезные ископаемые
          <span className="block text-forest-400 mt-1">Кыргызстана</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Кыргызстан располагает богатейшими запасами минеральных ресурсов. Изучите интерактивную
          карту месторождений и узнайте о горнодобывающем потенциале страны.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleScrollToMap}
            className="px-8 py-4 bg-forest-600 hover:bg-forest-500 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-forest-600/30 hover:-translate-y-0.5"
          >
            🗺️ Открыть карту
          </button>
          <button
            onClick={() => document.querySelector('#resources')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm"
          >
            📚 Узнать больше
          </button>
        </motion.div>

        {/* Mineral type pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-2"
        >
          {['🥇 Золото', '⚫ Уголь', '🛢️ Нефть', '🔴 Ртуть', '🟣 Сурьма', '🟠 Медь', '⚙️ Железо', '🔵 Газ'].map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1.5 bg-white/8 border border-white/15 rounded-full text-stone-400 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-stone-400 cursor-pointer"
        onClick={handleScrollToMap}
      >
        <span className="text-xs tracking-widest uppercase">Прокрутите</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
