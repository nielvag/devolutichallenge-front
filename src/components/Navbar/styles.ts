import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  background: #158467;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1100px;
  margin: 0 auto;
  background: #158467;


  img {
    margin: 31px 0 29px 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 31px 0 29px 0;

  li {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
    margin-right: 36px;
  }

  li:last-child {
    margin-right: 5px;
  }
`;

export const MenuLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    font-weight: 900;
  }

  color:#DDDDDD;
  text-decoration: none;
`;
