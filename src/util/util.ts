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
