import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 40px;
  z-index: 200;
  font-size: 1rem;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 768px) {
    padding: 15px 20px; // Ajuste de padding em mobile
    flex-direction: row; // Mantenha em linha
    justify-content: space-between;
    gap:12rem;;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 3em;

  svg {
    width: 60px; // Tamanho reduzido em mobile
    height: auto;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0; // Remove a margem em mobile
    svg {
      width: 40px; // Tamanho ainda menor em mobile
    }
  }
`;

export const MenuButton = styled.button`
  display: none; // Esconder o botão por padrão
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block; // Mostrar o botão em mobile
    justify-content: end;
  }
`;

export const Menu = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  display: flex;
  margin-right: 8em;
  transition: max-height 0.3s ease; 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; // Controle da altura
    overflow: hidden;
    margin: 0; 
  }
`;

export const MenuItem = styled.li`
  padding: 0 40px;
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    padding: 10px 0; // Ajusta padding em mobile
    font-size: 1.2em; // Ajusta tamanho da fonte em mobile
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline; // Exemplo de efeito de hover
  }
`;
