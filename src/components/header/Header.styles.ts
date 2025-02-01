import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";


export const SiteContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:1rem;
  
   
  @media screen and (min-width: 768px) {
    margin-left:1rem;
    padding:1rem;
    gap:5rem;
  }

 
`;
export const Hime = styled.img`
  position: relative;
  top: 50%; 
  right: 0; 
  width:100vh;
  transform: translateY(-40%);
  margin-top:10rem;
  height: auto; 
  z-index: 999; 

`;

export const ContainerHime = styled(motion.div)`
  display: flex; 
  align-items: flex-start; 
  margin-left:40rem;
  justify-content:space-around;
`;

export const ContainerText= styled(motion.div)`
  display: flex; 
  flex-direction:column;
  align-items: left; 
  justify-content:space-around;
  left:150px;
  position:relative;
  gap:16px;

`;


export const Title = styled(motion.h1)`
  font-size: 60px;
  display:flex;
  color: #FFFF;
  box-sizing: border-box;
  font-family:'Kotta One', sans serif;
  margin-top:10rem;
  justify-content: left;
  align-items:left;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content: left;
  gap:2rem;

`;
export const Subtitle = styled.p`
  font-size: 14px;
  color: #777;
  
  font-weight: 600;
  text-align: left;


   @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TechStackTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #2d2e32;

  @media screen and (min-width: 768px) {
  font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const TechStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    flex-wrap: wrap;

  svg {
    width:32px;
    height: 32px;
    color: #FF9BC6;
  }

  .item {
  padding: 1rem;
  }



 
`;

export const float = keyframes` {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-25px);
  }

  100% {
    transform: translatey(0px);
  }
}`;
export const Gato = styled.div`
  animation: ${float} 2s infinite linear;
  }
`;

