import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const/const';
import { QuestDetails, Quests } from '../../types/types';
import { fetchAllQuests, fetchQuest } from './thunk';
import { questLevelFilter, questTypeFilter } from '../../const/filter';
import { FilterStore, FilterType } from '../../types/filter';

type QuestsState = {
  allQuestsStatus: RequestStatus;
  allQuests: Quests;
  activeFilters: FilterStore[];
  questDetailsStatus: RequestStatus;
  questDetails: QuestDetails | null;
};

const filters = [questLevelFilter, questTypeFilter].map((filter) => ({
  type: filter.type,
  value: filter.default,
  default: filter.default,
}));

const initialState: QuestsState = {
  allQuestsStatus: RequestStatus.Idle,
  allQuests: [],
  activeFilters: filters,
  questDetailsStatus: RequestStatus.Idle,
  questDetails: null,
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setFilters(
      state,
      action: PayloadAction<{ type: FilterType; value: string }>
    ) {
      const update = action.payload;

      state.activeFilters = state.activeFilters.map((filter) =>
        filter.type === update.type ? { ...filter, ...update } : filter
      );
    },
  },
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
      })
      .addCase(fetchQuest.pending, (state) => {
        state.questDetailsStatus = RequestStatus.Loading;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.questDetails = action.payload;
        state.questDetailsStatus = RequestStatus.Success;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.questDetailsStatus = RequestStatus.Failed;
      }),
});

export const { setFilters } = questsSlice.actions;
