import styled, { createGlobalStyle, keyframes } from "styled-components";


export const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
gap:2rem;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {
padding-bottom:10rem;

    
  }
`;

export const Title = styled.div`
display:flex;
 justify-content:space-between;
flex-direction:row;
padding:2rem;
 margin-left:0.5rem;

font-weight:bold;
color:#2d2e32;
font-size:30px;


 @media screen and (min-width: 768px) {
 justify-content:space-between;
 margin-left:5rem;
padding-bottom:5rem;

font-size:40px

    
  }
`;

export const CardContainer = styled.div`
    width: 254px;
    height: 190px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    margin:1rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;

   
    &:hover {
     border-color: #fc393a;
     box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    }
    
   `;
   
   export const CardDetails = styled.div`
    color: black;
    height: 100%;
    display: flex;
    align-items:left;
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
   

 