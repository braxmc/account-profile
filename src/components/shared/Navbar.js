import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <NavLink to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to='/profile'>
      <Menu.Item>
        {/* Will replace with actual username */}
        username Profile
      </Menu.Item>
    </NavLink>
  </Menu>
)

export default Navbar