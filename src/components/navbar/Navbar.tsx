import React, { useState } from 'react';
import { MdLightbulb } from "react-icons/md";
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

      </Logo>
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
        <MenuItem>
        {/* <MdLightbulb /> */}
        </MenuItem>
      </Menu>
    </StyledNavbar>
  );
}

export default Navbar;
