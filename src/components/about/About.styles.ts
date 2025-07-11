// About.styles.ts
import styled, { createGlobalStyle } from "styled-components";
import {motion} from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

export const Clearfix = styled.div`

`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  width: 1600px;
  height:650px;
  margin: 20px auto;
  background-color: #fff;
`;



export const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-right:3rem;
  justify-content:center;
 `;

export const TextHeader = styled.div`
  margin-bottom: 10px;
`;

export const TextTitle = styled(motion.h2)`
  margin: 0;
  font-size: 2.2rem;
  color: #333;
`;

export const TextSubtitle = styled(motion.h3)`
  margin: 0;
  font-size: 1.2rem;
  color: #000;
  padding-top:20px;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;

export const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 16px;
  cursor: url('http://www.rw-designer.com/cursor-extern.php?id=94532'), pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


export const MinhaFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
   flex: 1;
  overflow: hidden;


  @media screen and (min-width: 768px) {
     justify-content: center;
     align-items:center;
  }


  img {
    border-radius: 8px;
    width: 670px;
    height: 590px;

    }
  }
`;
