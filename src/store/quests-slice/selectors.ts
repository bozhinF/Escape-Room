import { NameSpace } from '../../const/const';
import { State } from '../../types/state';

export const getAllQuests = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].allQuests;

export const getAllQuestsStatus = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].allQuestsStatus;

export const getActiveFilters = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].activeFilters;
