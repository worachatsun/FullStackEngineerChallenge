import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "../../context/UserContext";
import Landing from "../Pages/Landing";
import ListEmployees from "../Pages/ListEmployees";
import ListReviews from "../Pages/ListReviews";
import Performance from "../Pages/Performance";
import PrivateRoute from "./PrivateRoute";
import UserRoute from "./UserRoute";

const RouterCompoment: FunctionComponent = () => {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <PrivateRoute path="/list">
                        <ListEmployees />
                    </PrivateRoute>
                    <PrivateRoute path="/performance">
                        <Performance />
                    </PrivateRoute>
                    <UserRoute path="/reviews">
                        <ListReviews />
                    </UserRoute>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    );
};

export default RouterCompoment;
