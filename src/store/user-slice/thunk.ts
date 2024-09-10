import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorizationInfo, LoginAuthorization } from '../../types/types';
import { AxiosInstance } from 'axios';
import { Endpoint } from '../../const/const';
import { dropToken, saveToken } from '../../services/token';

export const checkLogin = createAsyncThunk<
  AuthorizationInfo,
  undefined,
  { extra: AxiosInstance }
>('user/checkLogin', async (_arg, { extra: api }) => {
  const response = await api.get<AuthorizationInfo>(Endpoint.Login);
  return response.data;
});

export const login = createAsyncThunk<
  AuthorizationInfo,
  LoginAuthorization,
  { extra: AxiosInstance }
>('user/login', async ({ email, password }, { extra: api }) => {
  const requestBody: LoginAuthorization = {
    email: email,
    password: password,
  };

  const { data } = await api.post<AuthorizationInfo>(
    Endpoint.Login,
    requestBody
  );
  saveToken(data.token);
  return data;
});

export const logout = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(Endpoint.Logout);
  dropToken();
});
