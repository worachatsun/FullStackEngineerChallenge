import React, { FunctionComponent, useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ListEmployees from '../Pages/ListEmployees';
import Landing from '../Pages/Landing';
import Performance from '../Pages/Performance';
import Question from '../Pages/Question';
import UserProvider, {
  UserActionType,
  UserContext,
  IUserContext,
} from '../../context/UserContext';
import { USER_DETAIL_API } from '../../constants/routes';
import { mutator, HttpMethod } from '../commons/utils/client';

const RouterCompoment: FunctionComponent = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/list'>
            <ListEmployees />
          </PrivateRoute>
          <PrivateRoute path='/performance'>
            <Performance />
          </PrivateRoute>
          <PrivateRoute path='/question'>
            <Question />
          </PrivateRoute>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
};

const PrivateRoute: FunctionComponent<any> = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');
  const { dispatch } = useContext(UserContext);
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

export default RouterCompoment;
