import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { Quests } from '../../types/types';
import { fetchAllQuests } from './thunk';

type QuestsState = {
  allQuestsStatus: RequestStatus;
  allQuests: Quests;
};

const initialState: QuestsState = {
  allQuestsStatus: RequestStatus.Idle,
  allQuests: [],
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllQuests.pending, (state) => {
        state.allQuestsStatus = RequestStatus.Loading;
      })
      .addCase(fetchAllQuests.fulfilled, (state, action) => {
        state.allQuests = action.payload;
        state.allQuestsStatus = RequestStatus.Success;
      })
      .addCase(fetchAllQuests.rejected, (state) => {
        state.allQuestsStatus = RequestStatus.Failed;
      }),
});
