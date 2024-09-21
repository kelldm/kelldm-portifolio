import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #000000;
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


export const Title = styled.h2`
  color: #ffffff;
  padding: 4rem;
  text-align: center;
  margin-top: 3rem;
  
  @media screen and (min-width: 768px) {
   

  }

  @media screen and (min-width: 1440px) {
   text-align: left;
    margin-top: 1.5rem;
  }
`;

export const Link = styled.a`
display: flex;
flex-direction:column;
  color: #ffffff;
  border-bottom: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 1rem;
  padding-bottom: 1rem;
  transition: all ease-out 0.4s;
  border-radius: 12px;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border-radius: 12px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
     gap:2rem;
      margin-bottom: 0;
    
  }

  @media screen and (min-width: 1440px) {
    flex-direction:row;
     gap:10rem;
      margin-bottom: 0;

  }
  
`;
export const Item = styled.li`
padding:1rem;
`;



export const FooterSocialLink = styled.a`
  background-color: #ffffff;
  color: #000000;
  font-size: 1.25rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
  display: inline-flex;

  &:hover {
    background-color: #ffffff;
  }
`;

export const FooterCopy = styled.span`
  display: flex;
  align-items:center;
  margin-top: 1.5rem;
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  padding: 2.5rem;
  
  @media screen and (min-width: 768px) {
    padding: 0.5rem;
    
    
  }

   @media screen and (min-width: 1440px) {
   padding:2rem;
  }

`;

export const FooterSocialIcon = styled.i`
  color: #ffffff;
  padding: 1rem;
`;