import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #000000;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;


export const Title = styled.h2`
  color: #ffffff;
  padding: 4rem;
  text-align: center;
  margin-top: 3rem;
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
  
`;
export const Item = styled.li`
padding:1rem;
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.125rem;
  padding: 20px;
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
  display: block;
  margin-top: 1.5rem;
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  padding: 2.5rem;
`;

export const FooterSocialIcon = styled.i`
  color: #ffffff;
  padding: 1rem;
`;