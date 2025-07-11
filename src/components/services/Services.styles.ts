import styled, { createGlobalStyle, keyframes } from "styled-components";
import {motion}  from "framer-motion";


export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
gap:5rem;
flex-wrap: wrap;
position: relative;

 @media screen and (min-width: 768px) {

    
  }
`;
export const Title = styled.div`
  font-family:'Kotta One', sans serif;
  padding-bottom:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size: 60px;
  display:flex;
  color: #FFFF;
  margin-top:300px;
`;

export const TitleCard = styled.div`
display:flex;
align-items: center;
flex-direction:row;
gap:16px;

  }
`;

export const ServicesContainer = styled(motion.div)`
    width: 320px;
    height: 160px;
    border-radius: 20px;
    background:#fff;
    position: relative;
    margin-top:1rem;
    padding: 1.8rem;
    border: 2px solid rgb(255, 121, 183);
    transition: 0.5s ease-out;
    overflow: visible;

   
    &:hover {
     border-color: #FF9BC6;
     box-shadow: 0 4px 18px 0 rgba(255, 25, 159, 0.25);
    }
    
   `;
   
   export const ServicesDetails = styled.div`
    color: #757575;
    font-size:16px;
    font-family: "Inter", Arial, sans-serif;
    height: 100%;
    display: flex;
    justify-content:center;
    flex-direction:column;
   `;
   
  
   
   export const TextBody = styled.p`
    color: rgb(134, 134, 134);
   `;
   
   export const TextTitle = styled.p`
    font-family: "Inter", Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
   `;

//    const pulsarWidth = keyframes`
//   0% {
//     scale: 1.1;
     
//   }
//   50% {
//     scale: 1;
//   }
//   100% {
//     scale: 1.1;
//   }
// `;

   export const Hime = styled.img`
  width: 300px;
  height: auto;
  position: absolute;
  right: 0;
  bottom: -8%;
  transform: translateX(-100%);


`;

  // animation: ${pulsarWidth} 3s ease-in-out infinite;


   

 