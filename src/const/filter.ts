import { Filter } from '../types/filter';

export const questTypeFilter: Filter = {
  title: 'Тематика',
  type: 'type',
  default: 'all',
  items: [
    {
      value: 'all',
      id: 'all',
      icon: {
        width: 26,
        height: 30,
        url: '#icon-all-quests',
      },
      text: 'Все квесты',
    },
    {
      value: 'adventures',
      id: 'adventure',
      icon: {
        width: 36,
        height: 30,
        url: '#icon-adventure',
      },
      text: 'Приключения',
    },
    {
      value: 'horror',
      id: 'horror',
      icon: {
        width: 30,
        height: 30,
        url: '#icon-horror',
      },
      text: 'Ужасы',
    },
    {
      value: 'mystic',
      id: 'mystic',
      icon: {
        width: 30,
        height: 30,
        url: '#icon-mystic',
      },
      text: 'Мистика',
    },
    {
      value: 'detective',
      id: 'detective',
      icon: {
        width: 40,
        height: 30,
        url: '#icon-detective',
      },
      text: 'Детектив',
    },
    {
      value: 'sci-fi',
      id: 'sciFi',
      icon: {
        width: 28,
        height: 30,
        url: '#icon-sci-fi',
      },
      text: 'Sci-fi',
    },
  ],
};

export const questLevelFilter: Filter = {
  title: 'Сложность',
  type: 'level',
  default: 'any',
  items: [
    {
      value: 'any',
      id: 'any',
      text: 'Любой',
    },
    {
      value: 'easy',
      id: 'easy',
      text: 'Лёгкий',
    },
    {
      value: 'medium',
      id: 'middle',
      text: 'Средний',
    },
    {
      value: 'hard',
      id: 'hard',
      text: 'Сложный',
    },
  ],
};
