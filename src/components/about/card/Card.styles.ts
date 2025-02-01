import styled, { createGlobalStyle, keyframes } from "styled-components";
import {motion}  from "framer-motion";


export const Container = styled.div`
display:flex;
justify-content:start;
flex-direction:row;
gap:2rem;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {

    
  }
`;

export const Title = styled.div`
display:flex;
justify-content: center;
flex-direction:row;
padding:2rem;
margin-left:0.5rem;
font-weight:bold;
color:#2d2e32;
font-size:30px;


 @media screen and (min-width: 768px) {
padding-bottom:5rem;
font-size:40px;
    
  }
`;

export const CardContainer = styled(motion.div)`
    width: 36px;
    height: 36px;
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
   
   export const CardDetails = styled.div`
    color: black;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
   `;
   
  
   
   export const TextBody = styled.p`
    color: rgb(134, 134, 134);
   `;
   
   export const TextTitle = styled.p`
    
    font-size: 1.5em;
    font-weight: bold;
   `;
   

 