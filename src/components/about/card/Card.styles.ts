import styled, { createGlobalStyle, keyframes } from "styled-components";


export const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
gap:2rem;
flex-wrap: wrap;
`;

export const CardContainer = styled.div`

    width: 190px;
    height: 254px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;

   
    &:hover {
     border-color: #40e0d0;
     box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }
    
   `;
   
   export const CardDetails = styled.div`
    color: black;
    height: 100%;
    gap: .5em;
    display: grid;
    place-content: center;
   `;
   
  
   
   export const TextBody = styled.p`
    color: rgb(134, 134, 134);
   `;
   
   export const TextTitle = styled.p`
    font-size: 1.5em;
    font-weight: bold;
   `;
   

 