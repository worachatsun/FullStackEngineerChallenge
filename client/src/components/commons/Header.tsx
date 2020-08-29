import React, { FunctionComponent, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Button from "./Button";
import {
    HeaderContainer,
    LogoContainer,
    LogoutContainer,
    UserContainer,
    LinkContainer,
    LinkWrapper,
} from "./Header.styled";

const Header: FunctionComponent = () => {
    const { state } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const onClickLogout = () => {
        localStorage.removeItem("token");
        history.push("/");
    };

    const onClickLogo = () => {
        history.push("/employees");
    };

    const routes = [
        { link: "/employees", name: "List employees" },
        { link: "/performance", name: "Performance Reviews" },
    ];

    return (
        <HeaderContainer>
            <LogoContainer onClick={onClickLogo}>
                <img src="img_logo.png" alt="logo" />
            </LogoContainer>
            {state.isAdmin ? (
                <LinkContainer>
                    {routes.map((route: { link: string; name: string }, index: number) => {
                        const currentRoute = route.link === location.pathname ? "#ff0033" : "black";
                        return (
                            <LinkWrapper to={route.link} color={currentRoute} key={index}>
                                {route.name}
                            </LinkWrapper>
                        );
                    })}
                </LinkContainer>
            ) : (
                <div />
            )}
            <LogoutContainer>
                <UserContainer>{state.username}</UserContainer>
                <Button onClick={onClickLogout}>Logout</Button>
            </LogoutContainer>
        </HeaderContainer>
    );
};

export default Header;
