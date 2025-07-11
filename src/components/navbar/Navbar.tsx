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
          <NavLink href="#contact">Services</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#questions">Q&A</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#messages">Contact</NavLink>
        </MenuItem>
      </Menu>
    </StyledNavbar>
  );
}

export default Navbar;
