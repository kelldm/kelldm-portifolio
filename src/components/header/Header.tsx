import React from "react";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import Social from "./Social.tsx";
import {
  SiteContent,
  Title,
  Subtitle,
  TechStackTitle,
  TechStack,
  MinhaFoto,
  float,
  Container,
  Gato,
  Hime, ContainerHime, ContainerText
} from "./Header.styles.ts";
import { TypeAnimation } from "react-type-animation";
import hime from "../../imgs/hime.png"
import Balloon from "../Balloon.tsx";
import PlayInput from "../PlayInput.tsx";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.9 } } 
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};


const Header = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
    <SiteContent>
      <Container>
      <Title variants={itemVariants} >Welcome to my world</Title>
         <ContainerHime variants={itemVariants}>
          <ContainerText>
          <Balloon
              text="Hi! 👋🏻 Let me introduce myself, I’m Raquel Lins, a creative and passionate Front-end Developer based in Rio de Janeiro, Brazil."
              width="450px"
              height="50px"
            />

        <PlayInput />
        </ContainerText>

      <Hime src={hime} alt="Hime"/>
    </ContainerHime>
  
      </Container>
    </SiteContent></motion.div>
  );
};

export default Header;
