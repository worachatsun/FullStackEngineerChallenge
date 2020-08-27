import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import Signin from "../Auth/Signin";
import { Container, LogoDiv, SigninDiv, Wrapper } from "./Landing.styled";

const Landing: FunctionComponent = () => {
    const history = useHistory();
    const token = localStorage.getItem("token");
    if (token) history.push("/list");

    return (
        <Container>
            <Wrapper>
                <LogoDiv>
                    <img src="img_logo.png" />
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
