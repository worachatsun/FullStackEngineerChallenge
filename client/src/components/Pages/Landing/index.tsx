import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Signin from "../Auth/Signin";
import { Container, LogoDiv, SigninDiv, Wrapper } from "./Landing.styled";

const Landing: FunctionComponent = () => {
    const history = useHistory();
    const token = localStorage.getItem("token");
    if (token) history.push("/employees");

    return (
        <Container>
            <Wrapper>
                <LogoDiv>
                    <img src="img_logo.png" alt="logo" />
                    <div>Performance Review</div>
                </LogoDiv>
                <SigninDiv>
                    <Signin />
                </SigninDiv>
            </Wrapper>
        </Container>
    );
};

export default Landing;
