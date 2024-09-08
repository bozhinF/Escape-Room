import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAllQuests = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].allQuests;

export const getAllQuestsStatus = (state: Pick<State, NameSpace.Quests>) =>
  state[NameSpace.Quests].allQuestsStatus;
