import React, { FunctionComponent } from 'react';
import { ButtonContainer } from './Button.styled';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
