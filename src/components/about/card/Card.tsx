import React from "react";
import {
   CardContainer, CardDetails, TextTitle, TextBody, Container, Title
  } from "./Card.styles.ts";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Card() {
  return (
    <>
    <Container>     
    <CardContainer>
        <CardDetails>
       <a href='https://www.linkedin.com/in/raquelldm/' target="_blank" rel="noopener noreferrer">
         <BsLinkedin size={40} color="#FF338B"/>
        </a>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
           <a href='https://github.com/kelldm' target="_blank" rel="noopener noreferrer">
                   <BsGithub size={43} color="#FF338B" />
                   </a>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
           <a href='https://www.instagram.com/kelldm_/' target="_blank" rel="noopener noreferrer">
                   <BsInstagram size={40} color="#FF338B"/>
                 </a>
        </CardDetails>
    </CardContainer>

    </Container>
    </>
  );
}

export default Card;
