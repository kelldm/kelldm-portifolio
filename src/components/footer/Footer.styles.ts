import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #FF9BC6;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
   
  @media screen and (min-width: 768px) {
  display:flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  }

   @media screen and (min-width: 1440px) {
  display:flex;
  justify-content: space-between;
  flex-direction:row;
  align-items:center;
  }


`;



export const FooterCopy = styled.span`
  display: flex;
  align-items:center;
  justify-content:center;
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  padding: 2.5rem;
  
  @media screen and (min-width: 768px) {
    padding: 1rem;
    
  }

`;

