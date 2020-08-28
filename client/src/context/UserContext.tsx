import React, { createContext, Dispatch, FunctionComponent, useReducer } from "react";
import { reducer } from "./reducer";
import { IUserContext, IUserAction } from "./types";

const initUserContext: IUserContext = {
    username: "",
    password: "",
    isAdmin: false,
};

export const UserContext = createContext<{
    state: IUserContext;
    dispatch: Dispatch<IUserAction>;
}>({
    state: initUserContext,
    dispatch: () => null,
});

const UserProvider: FunctionComponent<any> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initUserContext);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserProvider;
