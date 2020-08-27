import React, { FunctionComponent } from "react";
import Header from "./commons/Header";
import { LayoutContainer, LayoutWrapper } from "./Layout.styled";

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Header />
            <LayoutWrapper>
                <LayoutContainer>{children}</LayoutContainer>
            </LayoutWrapper>
        </>
    );
};

export default Layout;
