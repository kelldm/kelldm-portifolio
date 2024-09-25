import styled from 'styled-components';

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: flex-start;
  align-items: center;
  gap: 2rem; 
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
   margin-top:10rem;
    
  }

  @media screen and (min-width: 1440px) {
  padding:5 rem; 
  padding-top: 0.1rem;
  margin-bottom: 10rem;
  }
`;

export const SocialLink = styled.a<{ color: 'white' | 'black' }>`
  color: ${props => props.color};
  transition: color 0.3s ease;

  &:hover {
    color: #40e0d0;
  }
`;