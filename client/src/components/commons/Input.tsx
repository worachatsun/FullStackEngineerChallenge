import React, { FunctionComponent } from 'react';
import { InputContainer } from './Input.styled';

interface Props {
  placeholder?: string;
}

const Input: FunctionComponent<Props> = ({ placeholder = 'Empty' }) => {
  return <InputContainer placeholder={placeholder} />;
};

export default Input;
