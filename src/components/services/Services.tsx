import React from "react";
import {  ServicesContainer, ServicesDetails,  Container,Title,TextTitle, TitleCard, Hime } from "./Services.styles.ts";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import services from "../../imgs/services.png";
import Balloon from "../Balloon.tsx";



function Services() {
  return (
    <>
    <Title>Services</Title> 
      
    <Container> 
         
    <ServicesContainer>
        <ServicesDetails>
          <TitleCard>
       <a href='https://www.linkedin.com/in/raquelldm/' target="_blank" rel="noopener noreferrer">
         <LiaLaptopCodeSolid
         size={45} color="#FF338B"/>
        </a>
        <TextTitle>Front-end Development</TextTitle>
        </TitleCard>
        <p>Creative front-end development, seeking innovation, quality, and modernity in solutions.</p>
      </ServicesDetails>
    </ServicesContainer>

    <ServicesContainer>
        <ServicesDetails>
          <TitleCard>
           <a href='https://github.com/kelldm' target="_blank" rel="noopener noreferrer">
                   <MdOutlineDesignServices  size={43} color="#FF338B" />
                   </a>
                   <TextTitle>User Interface</TextTitle>
                   </TitleCard>
                   <p>I create prototypes, wireframes, and style guides to achieve user-friendly and visually appealing designs.</p>
        </ServicesDetails>
    </ServicesContainer>
         
<div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-45%', left: '38%' }}>
         <Balloon
              text="My services have differences such as clean code and UX thinking, which directly impact your front-end."
              width="250px"
              height="50px"
            />  
            </div>
   
    <ServicesContainer> 
        <ServicesDetails>
          <TitleCard>
           <a href='https://www.instagram.com/kelldm_/' target="_blank" rel="noopener noreferrer">
                   <SlBookOpen   size={40} color="#FF338B"/>
                 </a>
                 <TextTitle>Clean Code</TextTitle>
          </TitleCard>
                 <p>Development practices based on clean code for easy maintenance and understanding.</p>
        </ServicesDetails>
    </ServicesContainer>
    </div>
    
  
    <Hime src={services} alt="Hime"/>
    </Container>
    
    </>
  );
}

export default Services;
