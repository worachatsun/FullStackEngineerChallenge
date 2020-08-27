import React, { FunctionComponent, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_DETAIL_API } from "../../constants/routes";
import { IUserContext, UserActionType, UserContext } from "../../context/UserContext";
import { HttpMethod, mutator } from "../commons/utils/client";

const UserRoute: FunctionComponent<any> = ({ children, ...rest }) => {
    const token = localStorage.getItem("token");
    const { dispatch } = useContext(UserContext);
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const { response } = await mutator(USER_DETAIL_API, HttpMethod.GET, token as string);
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
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default UserRoute;
