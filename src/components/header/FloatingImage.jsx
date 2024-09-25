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
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius:16px;
`;

const Container = styled.div`
padding-top:3rem;
  display: flex;
  justify-content: center;
  align-items: center;

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