import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestDetails, QuestId, Quests } from '../../types/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../const/const';

export const fetchAllQuests = createAsyncThunk<
  Quests,
  undefined,
  { extra: AxiosInstance }
>('quests/fetch/all', async (_arg, { extra: api }) => {
  const response = await api.get<Quests>(Endpoint.Quests);
  return response.data;
});

export const fetchQuest = createAsyncThunk<
  QuestDetails,
  QuestId,
  { extra: AxiosInstance }
>('quests/fetch/offer', async ({ id }, { extra: api }) => {
  const response = await api.get<QuestDetails>(
    `${Endpoint.Quest}/${String(id)}`
  );
  return response.data;
});
