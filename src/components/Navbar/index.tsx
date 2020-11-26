import React from 'react';

import { Header, Bar, Menu, MenuLink } from './styles';
import logo from '../../assets/logo.svg';

const Navbar: React.FC = () => {
    return (
      <Header>
        <Bar>
          <img src={logo} alt="DevoluTI"/>
          <Menu>
            <li>
              <MenuLink to="/providers" exact activeClassName="menuLink">
                Fornecedores
              </MenuLink>
            </li>
            <li>
              <MenuLink to="products" activeClassName="menuLink">
                Produtos
              </MenuLink>
            </li>
          </Menu>
        </Bar>
      </Header>
    );
}

export default Navbar;