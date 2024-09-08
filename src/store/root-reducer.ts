import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userSlice } from './user-slice/user-slice';
import { questsSlice } from './quests-slice/quests-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Quests]: questsSlice.reducer,
});
