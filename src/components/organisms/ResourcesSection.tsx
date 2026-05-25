// Organism: ResourcesSection — educational mineral category cards grid

import React from 'react';
import { motion } from 'framer-motion';
import { mineralCategories } from '../../shared/data/minerals';
import MineralCard from '../molecules/MineralCard';
import SectionTitle from '../atoms/SectionTitle';

const ResourcesSection: React.FC = () => (
  <section id="resources" className="py-20 bg-white dark:bg-stone-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle
          title="Виды полезных ископаемых"
          subtitle="Кыргызстан богат разнообразными минеральными ресурсами. Ниже представлены основные виды полезных ископаемых, добываемых в стране."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {mineralCategories.map((category, index) => (
          <MineralCard key={category.type} category={category} index={index} />
        ))}
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 bg-forest-50 dark:bg-forest-900/20 border border-forest-100 dark:border-forest-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
      >
        <div className="text-5xl">🌍</div>
        <div>
          <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-1">
            Стратегические запасы
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            По оценкам геологов, Кыргызстан обладает более чем 5000 учтёнными месторождениями
            и рудопроявлениями различных полезных ископаемых. Общая стоимость разведанных запасов
            оценивается в сотни миллиардов долларов.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResourcesSection;
