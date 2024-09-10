import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const/const';
import { checkLogin, login, logout } from './thunk';
import { AuthorizationInfo } from '../../types/types';

type UserState = {
  authorizationStatus: AuthorizationStatus;
  userProfile: AuthorizationInfo | null;
};

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userProfile: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userProfile = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userProfile = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      }),
});
