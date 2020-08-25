import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListEmployees from '../Pages/ListEmployees';
import Landing from '../Pages/Landing';
import Performance from '../Pages/Performance';
import Question from '../Pages/Question';

const RouterCompoment: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/list'>
          <ListEmployees />
        </Route>
        <Route path='/performance'>
          <Performance />
        </Route>
        <Route path='/question'>
          <Question />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterCompoment;
