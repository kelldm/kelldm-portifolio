import React, { useState } from 'react';
import logo from '../../imgs/logo.svg';
import { StyledNavbar, Logo, MenuButton, Menu, MenuItem, NavLink } from './Navbar.styles.ts';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <StyledNavbar>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <MenuButton onClick={toggleMenu}>
        <span style={{ display: 'block', width: '30px', height: '3px', background: '#000', margin: '5px 0' }}></span>
        <span style={{ display: 'block', width: '30px', height: '3px', background: '#000', margin: '5px 0' }}></span>
        <span style={{ display: 'block', width: '30px', height: '3px', background: '#000', margin: '5px 0' }}></span>
      </MenuButton>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <NavLink href="#home">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#skills">Skills</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#contact">Contact</NavLink>
        </MenuItem>
      </Menu>
    </StyledNavbar>
  );
}

export default Navbar;
