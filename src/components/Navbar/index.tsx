import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{fontWeight: "bold"}}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="products" activeStyle={{fontWeight: "bold"}}>
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;