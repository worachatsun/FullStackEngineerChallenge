import React, { FunctionComponent, useContext, useEffect } from "react";
import { Redirect, Route, RouteProps, useHistory } from "react-router-dom";
import { USER_DETAIL_API } from "../../constants/routes";
import { IUserContext, UserActionType, UserContext } from "../../context/UserContext";
import { HttpMethod, mutator } from "../commons/utils/client";

const PrivateRoute: FunctionComponent<any> = ({ children, ...rest }) => {
    const token = localStorage.getItem("token");
    const { dispatch } = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const { response } = await mutator(USER_DETAIL_API, HttpMethod.GET, token as string);
        const data = await response?.json();
        if (!data.isAdmin) history.push("/reviews");
        dispatch({ type: UserActionType.ADD_USER, payload: data as IUserContext });
    };

    const route = ({ location }: RouteProps) =>
        token ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: "/",
                    state: { from: location },
                }}
            />
        );

    return <Route {...rest} render={route} />;
};

export default PrivateRoute;
