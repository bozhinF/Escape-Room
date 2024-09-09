import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorizationInfo } from '../../types/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../const/const';

export const checkLogin = createAsyncThunk<
  AuthorizationInfo,
  undefined,
  { extra: AxiosInstance }
>('user/checkLogin', async (_arg, { extra: api }) => {
  const response = await api.get<AuthorizationInfo>(Endpoint.Login);
  return response.data;
});
