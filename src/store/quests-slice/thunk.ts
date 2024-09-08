import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quests } from '../../types/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../const';

export const fetchAllQuests = createAsyncThunk<
  Quests,
  undefined,
  { extra: AxiosInstance }
>('quests/fetch/all', async (_arg, { extra: api }) => {
  const response = await api.get<Quests>(Endpoint.Quests);
  return response.data;
});
