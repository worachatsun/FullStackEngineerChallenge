import React, { useContext, FunctionComponent } from 'react';
import {
  HeaderContainer,
  LogoContainer,
  LogoutContainer,
  UserContainer,
} from './Header.styled';
import { UserContext } from '../../context/UserContext';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const Header: FunctionComponent = () => {
  const { state } = useContext(UserContext);
  const history = useHistory();

  const onClickLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const onClickLogo = () => {
    history.push('/list');
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={onClickLogo}>
        <img src='img_logo.png' />
      </LogoContainer>
      <LogoutContainer>
        <UserContainer>{state.username}</UserContainer>
        <Button onClick={onClickLogout}>Logout</Button>
      </LogoutContainer>
    </HeaderContainer>
  );
};

export default Header;
