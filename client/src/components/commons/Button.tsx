import React, { FunctionComponent } from "react";
import { ButtonContainer } from "./Button.styled";

interface IProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: FunctionComponent<IProps> = ({ children, onClick }) => {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
