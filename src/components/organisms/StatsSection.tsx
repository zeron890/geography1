// Organism: StatsSection — animated statistics about Kyrgyz mining industry

import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../shared/data/minerals';
import StatCard from '../molecules/StatCard';

// Timeline milestones
const timeline = [
  { year: '1868', event: 'Начало промышленной добычи угля в Сулюкте', icon: '⚫' },
  { year: '1905', event: 'Первые нефтяные скважины в Ферганской долине', icon: '🛢️' },
  { year: '1941', event: 'Запуск Хайдарканского ртутного комбината', icon: '🔴' },
  { year: '1978', event: 'Открытие золотого месторождения Кумтор', icon: '🥇' },
  { year: '1997', event: 'Промышленная разработка Кумтора началась', icon: '⛏️' },
  { year: '2021', event: 'Национализация Кумтора — переход под контроль государства', icon: '🇰🇬' },
];

const StatsSection: React.FC = () => (
  <section id="stats" className="py-20 bg-gradient-to-br from-forest-900 to-stone-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Горнодобывающая отрасль в цифрах
        </h2>
        <p className="text-stone-400 max-w-xl mx-auto">
          Ключевые показатели минерально-сырьевого комплекса Кыргызской Республики
        </p>
        <div className="mt-4 h-1 w-16 rounded-full bg-forest-400 mx-auto" />
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {statsData.map((stat, i) => (
          <StatCard
            key={stat.label}
            index={i}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
          />
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h3
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          История горнодобычи
        </h3>
        <p className="text-stone-400 text-sm">Ключевые события отрасли</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`flex items-center gap-4 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 md:px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white/8 border border-white/15 rounded-xl p-4 inline-block text-left">
                  <span className="text-forest-400 font-bold text-sm">{item.year}</span>
                  <p className="text-stone-300 text-sm mt-1">{item.event}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-10 h-10 rounded-full bg-forest-700 border-2 border-forest-500 items-center justify-center text-lg flex-shrink-0 z-10">
                {item.icon}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
