import { PasswordLength } from '../const/const';
import { FilterStore } from '../types/filter';
import { Quests } from '../types/types';

export const filter = (
  quests: Quests,
  activeFilters: FilterStore[]
): Quests => {
  const filteredQuests = quests.filter((quest) =>
    activeFilters.every(
      (activeFilter) =>
        activeFilter.value === activeFilter.default ||
        quest[activeFilter.type] === activeFilter.value
    )
  );

  return filteredQuests;
};

export const checkPasswordValid = (password: string): boolean =>
  password.length >= PasswordLength.Min &&
  password.length <= PasswordLength.Max &&
  /\d/g.test(password) &&
  /[a-zA-Zа-яА-Я]/g.test(password);
