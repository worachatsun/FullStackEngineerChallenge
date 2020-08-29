import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 73.81px;
    border-bottom: solid 8px #f03;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    margin-left: 10px;
`;

export const LogoutContainer = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

export const UserContainer = styled.div`
    margin-right: 10px;
`;

export const LinkContainer = styled.div`
    display: flex;
`;

export const LinkWrapper = styled(Link)<{ color: string }>`
    margin-right: 20px;
    text-decoration: none;
    color: ${(props) => props.color};
    &:visited {
        color: ${(props) => props.color};
        text-decoration: none;
    }
`;
