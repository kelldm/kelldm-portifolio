import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

// Tipagem para os temas
interface Theme {
  background: string;
  color: string;
}

// Temas claro e escuro
const lightTheme: Theme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme: Theme = {
  background: '#000000',
  color: '#ffffff',
};

// Estilos globais para aplicar o tema
const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s ease;
  }
`;

// Botão do Switch
const BulbButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12;
  }
`;

const BulbSwitch: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BulbButton onClick={toggleTheme}>
          {isDarkTheme ? <FaMoon /> : <FaSun />}
        </BulbButton>
      </div>
    </ThemeProvider>
  );
};

export default BulbSwitch;
