// Organism: Footer — educational project footer

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-stone-900 dark:bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-forest-700 rounded-lg flex items-center justify-center text-white text-sm">
                ⛰️
              </div>
              <div>
                <div className="font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ГеоКыргызстан
                </div>
                <div className="text-xs text-stone-500">Полезные ископаемые</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Интерактивный образовательный портал о минерально-сырьевом потенциале
              Кыргызской Республики.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-stone-300 font-semibold mb-4 text-sm uppercase tracking-wider">Разделы</h4>
            <ul className="space-y-2">
              {[
                ['#map', '🗺️ Интерактивная карта'],
                ['#resources', '💎 Виды ископаемых'],
                ['#stats', '📊 Статистика'],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-400 hover:text-forest-400 text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-stone-300 font-semibold mb-4 text-sm uppercase tracking-wider">О проекте</h4>
            <div className="bg-stone-800 rounded-xl p-4 border border-stone-700">
              <p className="text-stone-400 text-xs leading-relaxed mb-3">
                Данный проект создан в образовательных целях для изучения геологии и природных
                ресурсов Кыргызстана. Данные носят ознакомительный характер.
              </p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>👤</span>
                  <span>Студенческий проект · {currentYear}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>🏫</span>
                  <span>Кыргызстан · Геология</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>📚</span>
                  <span>Источники: открытые геологические данные</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>© {currentYear} ГеоКыргызстан — Образовательный проект</p>
          <div className="flex items-center gap-1.5">
            <span>Разработано с</span>
            <span className="text-red-500">♥</span>
            <span>для изучения геологии Кыргызстана</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
