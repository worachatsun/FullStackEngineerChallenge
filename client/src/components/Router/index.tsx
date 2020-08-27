import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListEmployees from '../Pages/ListEmployees';
import Landing from '../Pages/Landing';
import Performance from '../Pages/Performance';
import UserProvider from '../../context/UserContext';
import PrivateRoute from './PrivateRoute';
import UserRoute from './UserRoute';
import ListReviews from '../Pages/ListReviews';

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
          <UserRoute path='/reviews'>
            <ListReviews />
          </UserRoute>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default RouterCompoment;
