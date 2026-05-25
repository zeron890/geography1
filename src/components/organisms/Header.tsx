// Organism: Header — sticky navigation bar with dark mode toggle

import React, { useEffect, useState } from 'react';
import { navLinks } from '../../shared/data/minerals';

interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onToggleDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm border-b border-stone-100 dark:border-stone-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-forest-700 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              ⛰️
            </div>
            <div>
              <div className="font-semibold text-stone-800 dark:text-stone-100 text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                ГеоКыргызстан
              </div>
              <div className="text-xs text-stone-400 dark:text-stone-500 hidden sm:block">Полезные ископаемые</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-forest-700 dark:hover:text-forest-400 hover:bg-forest-50 dark:hover:bg-forest-900/30 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={darkMode ? 'Светлая тема' : 'Тёмная тема'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden py-2 pb-4 border-t border-stone-100 dark:border-stone-800">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2.5 text-sm text-stone-600 dark:text-stone-300 hover:text-forest-700 dark:hover:text-forest-400 hover:bg-forest-50 dark:hover:bg-stone-800 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
