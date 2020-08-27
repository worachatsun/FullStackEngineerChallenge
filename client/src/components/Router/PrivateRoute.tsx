import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import {
  UserActionType,
  UserContext,
  IUserContext,
} from '../../context/UserContext';
import { USER_DETAIL_API } from '../../constants/routes';
import { mutator, HttpMethod } from '../commons/utils/client';

const PrivateRoute: FunctionComponent<any> = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const { response } = await mutator(
      USER_DETAIL_API,
      HttpMethod.GET,
      token as string
    );
    const data = await response?.json();
    if (!data.isAdmin) history.push('/reviews');
    dispatch({ type: UserActionType.ADD_USER, payload: data as IUserContext });
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
