import { NameSpace } from '../../const/const';
import { State } from '../../types/state';

export const getUserStatus = (state: Pick<State, NameSpace.User>) =>
  state[NameSpace.User].authorizationStatus;
