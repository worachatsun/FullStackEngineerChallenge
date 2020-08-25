import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../Pages/Auth/Signin';
import Landing from '../Pages/Landing';

const RouterCompoment: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
        <Route path='/about'>
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterCompoment;
