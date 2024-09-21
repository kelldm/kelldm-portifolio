import styled from 'styled-components';

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  gap: 2rem; 
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: column; 
    gap: 0; 
  }

  @media screen and (min-width: 1440px) {
    padding: 3rem;
  }
`;

export const SocialLink = styled.a<{ color: 'white' | 'black' }>`
  color: ${props => props.color};
  transition: color 0.3s ease;

  &:hover {
    color: #40e0d0;
  }
`;