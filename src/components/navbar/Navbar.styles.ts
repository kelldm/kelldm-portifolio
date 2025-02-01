import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px #FF9BC6;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 40px;
  z-index: 200;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 15px 20px; 
    flex-direction: row;
    justify-content: space-between;
    gap:12rem;;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3em;

  svg {
    width: 60px; 
    height: auto;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0; 
    svg {
      width: 40px; 
    }
  }
`;

export const MenuButton = styled.button`
  display: none; 
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  display: flex;
  margin-right: 8em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; 
    overflow: hidden;
    margin: 0; 
  }
`;

export const MenuItem = styled.li`
  padding: 0 40px;
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    font-size: 1.2em; 
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding:10px;



  &:hover {
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
    background: #fff;
    color: #FF9BC6;
    border-radius: 5px;
  }
`;
