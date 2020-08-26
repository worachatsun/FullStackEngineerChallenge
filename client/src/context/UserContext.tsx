import React, {
  createContext,
  useReducer,
  FunctionComponent,
  Dispatch,
} from 'react';
import { reducer } from './reducer';

export interface IUserContext {
  username: string;
  password: string;
  isAdmin: boolean;
}

const initUserContext: IUserContext = {
  username: '',
  password: '',
  isAdmin: false,
};

export enum UserActionType {
  ADD_USER = 'ADD_USER',
}

export interface IProjectAction {
  type: UserActionType;
  payload: IUserContext;
}

export const UserContext = createContext<{
  state: IUserContext;
  dispatch: Dispatch<IProjectAction>;
}>({
  state: initUserContext,
  dispatch: () => null,
});

const UserProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initUserContext);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
