// ============================================================
// Mineral deposits data for Kyrgyzstan
// Coordinates: [latitude, longitude]
// Sources: Geological Survey of Kyrgyzstan, public data
// ============================================================

import { Deposit } from '../types';

export const deposits: Deposit[] = [
  // ─── GOLD ────────────────────────────────────────────────
  {
    id: 'kumtor',
    name: 'Кумтор',
    type: 'gold',
    region: 'Иссык-Кульская область',
    coordinates: [41.86, 78.18],
    description:
      'Кумтор — одно из крупнейших золотых месторождений в Центральной Азии. Расположено на высоте около 4000 метров в Тянь-Шанских горах. Разрабатывается с 1997 года.',
    production: 'Запасы: около 500 тонн золота. Ежегодная добыча: 12–17 тонн',
    discoveredYear: 1978,
    status: 'active',
  },
  {
    id: 'jerooy',
    name: 'Джеруй',
    type: 'gold',
    region: 'Таласская область',
    coordinates: [42.41, 72.81],
    description:
      'Джеруй — второе по величине золотое месторождение Кыргызстана. Находится в Таласской долине. Является стратегически важным объектом страны.',
    production: 'Запасы: около 100 тонн золота. Проектная мощность: 5–7 тонн в год',
    discoveredYear: 1958,
    status: 'active',
  },
  {
    id: 'taldy-bulak',
    name: 'Талды-Булак Левобережный',
    type: 'gold',
    region: 'Чуйская область',
    coordinates: [42.77, 75.30],
    description:
      'Золото-сульфидное месторождение на севере страны. Перспективный объект для инвестиций.',
    production: 'Запасы: около 80 тонн золота',
    discoveredYear: 1990,
    status: 'developing',
  },
  {
    id: 'ishtamberdy',
    name: 'Иштамберды',
    type: 'gold',
    region: 'Джалал-Абадская область',
    coordinates: [41.56, 72.80],
    description:
      'Золото-кварцевое месторождение в южном Кыргызстане. Имеет значительный потенциал добычи.',
    production: 'Запасы: около 30 тонн золота',
    status: 'exploring' as any,
    discoveredYear: 2001,
  },

  // ─── COAL ────────────────────────────────────────────────
  {
    id: 'kara-keche',
    name: 'Кара-Кече',
    type: 'coal',
    region: 'Нарынская область',
    coordinates: [41.70, 74.74],
    description:
      'Кара-Кече — крупнейшее угольное месторождение Кыргызстана. Уголь каменный, высококалорийный. Обеспечивает значительную часть энергетических нужд страны.',
    production: 'Запасы: более 1 млрд тонн. Добыча: 0.5–1 млн тонн в год',
    discoveredYear: 1940,
    status: 'active',
  },
  {
    id: 'sulukta',
    name: 'Сулюкта',
    type: 'coal',
    region: 'Баткенская область',
    coordinates: [39.93, 69.56],
    description:
      'Одно из старейших угольных месторождений страны. Разрабатывается с 1868 года. Бурый уголь используется для местного отопления.',
    production: 'Запасы: около 20 млн тонн. История добычи более 150 лет',
    discoveredYear: 1868,
    status: 'active',
  },
  {
    id: 'kok-janggak',
    name: 'Кок-Жангак',
    type: 'coal',
    region: 'Джалал-Абадская область',
    coordinates: [41.02, 73.19],
    description:
      'Каменноугольное месторождение с развитой горнодобывающей инфраструктурой. Активно разрабатывается с советских времён.',
    production: 'Запасы: около 60 млн тонн',
    discoveredYear: 1900,
    status: 'active',
  },

  // ─── OIL & GAS ──────────────────────────────────────────
  {
    id: 'maili-suu',
    name: 'Майлуу-Суу',
    type: 'oil',
    region: 'Джалал-Абадская область',
    coordinates: [41.27, 72.46],
    description:
      'Майлуу-Суу — исторически значимое нефтяное месторождение. Разрабатывалось в советский период. Сейчас добыча незначительна, ведётся рекультивация.',
    production: 'В советский период добывалось до 700 тысяч тонн нефти в год',
    discoveredYear: 1905,
    status: 'active',
  },
  {
    id: 'fergana',
    name: 'Чангырташ',
    type: 'gas',
    region: 'Ошская область',
    coordinates: [40.52, 72.78],
    description:
      'Газовое месторождение в Ферганской долине. Является источником природного газа для южных регионов страны.',
    production: 'Запасы: около 5 млрд м³ природного газа',
    discoveredYear: 1962,
    status: 'active',
  },

  // ─── MERCURY ─────────────────────────────────────────────
  {
    id: 'khaidarkan',
    name: 'Хайдаркан',
    type: 'mercury',
    region: 'Баткенская область',
    coordinates: [39.94, 70.48],
    description:
      'Хайдаркан — одно из крупнейших ртутных месторождений в мире. Комбинат работает с 1941 года. Кыргызстан входит в тройку мировых производителей ртути.',
    production: 'Запасы: около 20 000 тонн ртути. Мировой лидер по запасам',
    discoveredYear: 1941,
    status: 'active',
  },

  // ─── ANTIMONY ────────────────────────────────────────────
  {
    id: 'kadamjai',
    name: 'Кадамжай',
    type: 'antimony',
    region: 'Баткенская область',
    coordinates: [40.14, 71.28],
    description:
      'Кадамжай — крупнейшее сурьмяное месторождение в СНГ. Сурьмяно-ртутный комбинат производит высокочистую сурьму, экспортируемую по всему миру.',
    production: 'Запасы: около 200 000 тонн. Один из крупнейших в Азии',
    discoveredYear: 1935,
    status: 'active',
  },

  // ─── COPPER ──────────────────────────────────────────────
  {
    id: 'ak-tyuz',
    name: 'Ак-Тюз',
    type: 'copper',
    region: 'Чуйская область',
    coordinates: [42.91, 76.15],
    description:
      'Полиметаллическое месторождение с запасами меди, свинца, цинка и редкоземельных металлов. Имеет важное экономическое значение.',
    production: 'Запасы меди: около 300 000 тонн',
    discoveredYear: 1940,
    status: 'developing',
  },
  {
    id: 'boordu',
    name: 'Бoorду',
    type: 'copper',
    region: 'Нарынская область',
    coordinates: [41.30, 76.10],
    description:
      'Перспективное медное месторождение в высокогорном Нарыне. Находится на стадии геологического изучения.',
    production: 'Прогнозные запасы: более 500 000 тонн',
    status: 'developing',
  },

  // ─── IRON ────────────────────────────────────────────────
  {
    id: 'zhaman-achchy',
    name: 'Жаман-Ачы',
    type: 'iron',
    region: 'Нарынская область',
    coordinates: [41.52, 75.80],
    description:
      'Железорудное месторождение в центральном Кыргызстане. Руда магнетитовая, богатая. Требует значительных инвестиций для освоения.',
    production: 'Запасы: около 200 млн тонн железной руды',
    discoveredYear: 1955,
    status: 'exploring' as any,
  },

  // ─── URANIUM ─────────────────────────────────────────────
  {
    id: 'min-kush',
    name: 'Мин-Куш',
    type: 'uranium',
    region: 'Нарынская область',
    coordinates: [41.82, 74.49],
    description:
      'Историческое урановое месторождение советского периода. В настоящее время ведутся работы по рекультивации и устранению радиационных последствий.',
    production: 'Добывалось в 1956–1968 гг. Сейчас законсервировано',
    discoveredYear: 1948,
    status: 'exploring' as any,
  },
];

/** Get deposits filtered by mineral type */
export const getDepositsByType = (type: string): Deposit[] =>
  deposits.filter((d) => d.type === type);

/** Get deposits filtered by region */
export const getDepositsByRegion = (region: string): Deposit[] =>
  deposits.filter((d) => d.region === region);

/** Count deposits by mineral type */
export const countByType = (): Record<string, number> =>
  deposits.reduce(
    (acc, d) => ({ ...acc, [d.type]: (acc[d.type] || 0) + 1 }),
    {} as Record<string, number>
  );
