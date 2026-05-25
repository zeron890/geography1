// ============================================================
// Mineral categories — metadata for cards, legend, markers
// ============================================================

import { MineralCategory } from '../types';

export const mineralCategories: MineralCategory[] = [
  {
    type: 'gold',
    labelRu: 'Золото',
    emoji: '🥇',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    markerColor: '#d97706',
    description:
      'Кыргызстан входит в число ведущих золотодобывающих стран СНГ. Горная страна обладает богатейшими золотоносными жилами в Тянь-Шанских горах. Золото — главная статья экспорта республики.',
    usages: ['Ювелирное дело', 'Электроника', 'Банковские резервы', 'Медицина'],
    totalDeposits: 4,
  },
  {
    type: 'coal',
    labelRu: 'Уголь',
    emoji: '⚫',
    color: 'bg-slate-100 text-slate-800 border-slate-200',
    markerColor: '#334155',
    description:
      'Каменный и бурый уголь — важнейший энергетический ресурс Кыргызстана. Крупнейшие угольные бассейны обеспечивают страну топливом и экспортируются в соседние государства.',
    usages: ['Электроэнергетика', 'Отопление', 'Металлургия', 'Химическая промышленность'],
    totalDeposits: 3,
  },
  {
    type: 'oil',
    labelRu: 'Нефть',
    emoji: '🛢️',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    markerColor: '#c2410c',
    description:
      'Нефтяные месторождения Кыргызстана сосредоточены главным образом в Ферганской долине. Добыча ведётся с начала XX века. Потенциал для новых открытий сохраняется.',
    usages: ['Топливо', 'Пластмассы', 'Удобрения', 'Нефтехимия'],
    totalDeposits: 1,
  },
  {
    type: 'gas',
    labelRu: 'Природный газ',
    emoji: '🔵',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    markerColor: '#2563eb',
    description:
      'Природный газ добывается в южных регионах страны. Используется для обеспечения бытовых нужд населения и промышленности южного Кыргызстана.',
    usages: ['Отопление', 'Электроэнергия', 'Химпроизводство', 'Транспорт'],
    totalDeposits: 1,
  },
  {
    type: 'mercury',
    labelRu: 'Ртуть',
    emoji: '🔴',
    color: 'bg-red-100 text-red-800 border-red-200',
    markerColor: '#dc2626',
    description:
      'Кыргызстан — один из мировых лидеров по запасам и добыче ртути. Хайдарканское месторождение входит в тройку крупнейших в мире. Ртуть экспортируется в десятки стран.',
    usages: ['Приборостроение', 'Медицина', 'Электротехника', 'Химия'],
    totalDeposits: 1,
  },
  {
    type: 'antimony',
    labelRu: 'Сурьма',
    emoji: '🟣',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    markerColor: '#7c3aed',
    description:
      'По запасам сурьмы Кыргызстан занимает одно из ведущих мест в СНГ. Кадамжайский комбинат производит металлическую сурьму высочайшей чистоты для мировых рынков.',
    usages: ['Полупроводники', 'Огнезащитные материалы', 'Батареи', 'Типографское дело'],
    totalDeposits: 1,
  },
  {
    type: 'copper',
    labelRu: 'Медь',
    emoji: '🟠',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    markerColor: '#b45309',
    description:
      'Медные месторождения Кыргызстана разнообразны: от относительно небольших до весьма перспективных. Медь нередко сопровождается свинцом, цинком и редкоземельными металлами.',
    usages: ['Электроника', 'Строительство', 'Машиностроение', 'Монеты'],
    totalDeposits: 2,
  },
  {
    type: 'iron',
    labelRu: 'Железо',
    emoji: '⚙️',
    color: 'bg-gray-100 text-gray-800 border-gray-200',
    markerColor: '#374151',
    description:
      'Железорудные месторождения страны располагают значительными запасами высококачественной руды. Освоение потребует масштабных инвестиций в горнодобывающую и транспортную инфраструктуру.',
    usages: ['Металлургия', 'Машиностроение', 'Строительство', 'Инструменты'],
    totalDeposits: 1,
  },
];

/** Map type string to category object for quick lookup */
export const mineralByType = Object.fromEntries(
  mineralCategories.map((c) => [c.type, c])
) as Record<string, MineralCategory>;

/** Navigation links */
export const navLinks = [
  { label: 'Карта', href: '#map' },
  { label: 'Ресурсы', href: '#resources' },
  { label: 'Статистика', href: '#stats' },
  { label: 'О проекте', href: '#footer' },
];

/** Statistics data */
export const statsData = [
  { label: 'Месторождений учтено', value: 5000, suffix: '+', icon: '⛰️' },
  { label: 'Видов полезных ископаемых', value: 80, suffix: '+', icon: '💎' },
  { label: 'Доля в ВВП страны', value: 12, suffix: '%', icon: '📈' },
  { label: 'Лет горнодобывающей истории', value: 150, suffix: '+', icon: '⏳' },
];
