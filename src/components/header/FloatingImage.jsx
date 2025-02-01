import React from 'react';
import styled, { keyframes } from 'styled-components';
import gato from "../../imgs/gatuwu.gif";


const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingImageStyle = styled.img`
  animation: ${float} 3s ease-in-out infinite;

  border-radius:100%;

    @media (min-width: 1080px) {
  
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: top;
  align-items: top;
  padding-top:10rem;

`;

const FloatingImage = () => {
  return (
    <Container>
      <FloatingImageStyle 
        src={gato}
        alt="Floating placeholder image"
      />
    </Container>
  );
};

export default FloatingImage;