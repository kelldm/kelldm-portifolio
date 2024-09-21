import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@400;500;600&family=Varela+Round&display=swap');
  @import '~@fortawesome/fontawesome-free/css/all.css';

  .fa-flip-horizontal {
    transform: scaleX(-1);
  }
     @media screen and (min-width: 768px) {
  display:flex;
  justify-content: center;
  align-items:center;

  }

`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
  font-weight: 600;
  text-align: justify; 

  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const H3Title = styled.h3`
  font-size: 40px;
  font-weight: 900;
  color: #000;
  padding: 50px;
`;

export const TitleCenter = styled.div`
  text-align: center;
`;


export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  box-sizing: border-box;
  margin: 1rem;
  max-width: 600px;
  padding: 30px;
  border-radius: 10px;
  margin-left: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 1rem;
    
     max-width: 1500px;

  }
`;

export const Clearfix = styled.div`
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }
`;

export const TextHeader = styled.div`
  text-align: left;
  margin-bottom: 20px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const TextTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  font-weight: 900;
  color: #000;
  padding-bottom: 10px;

  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const TextSubtitle = styled.h5`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  color: #000;
  margin: 0;
  padding-bottom: 20px;

  @media screen and (max-width: 764px) {
    font-size: 16px;
  }

   @media screen and (max-width: 1440px) {
    font-size: 20px;
  }

`;



export const DownloadButton = styled.button`
  background-color: #333;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align:center;
  color: #fff;
  padding: 20px 30px;
  border: none;
  border-radius: 35px;
  box-shadow: #000;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  &:hover {
    background-color: #40e0d0;
  }

  @media screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;


export const DownloadButtonContainer = styled.div`
  padding: 1rem;
   padding-bottom: 4rem;
  display: flex;
  justify-content: center;
`;


