import React from "react";
import {
  GlobalStyle,
  Subtitle,
  TextBox,
  Clearfix,
  TextHeader,
  TextTitle,
  DownloadButtonContainer,
  DownloadButton,
  TextSubtitle,
  Container, 
  MinhaFoto
} from "./About.styles.ts";
import minhaFoto from "../../imgs/about.svg";
import Card from "./card/Card.tsx";
import {motion} from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 2 } } 
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
};


function About() {
  return (
    <>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      > 
     <GlobalStyle />
      <Clearfix id="about">
        
        <Container>
          
        <MinhaFoto>
            <img src={minhaFoto} alt="Minha Foto" />
          </MinhaFoto>
        <TextBox>
          <TextHeader> 
             <TextTitle  variants={itemVariants} >Oh, Who I’m? Well... </TextTitle>
            <TextSubtitle  variants={itemVariants} >A Passionate Developer based in Rio de Janeiro, Brazil. 📍</TextSubtitle>
          
          </TextHeader>
        
          <Subtitle  variants={itemVariants}>
            I’m interning as a
            front-end developer at Sys Manager. I'm deeply passionate about technology and innovation,
            with a strong focus on User Experience (UX) design, where I love
            creating seamless digital experiences. In addition to my curiosity
            for Artificial Intelligence (AI), I am also deeply passionate about
            video games and interested in exploring this field further. I am excited
            about the possibilities ahead. Let’s connect and explore how we can
            create innovative, user-centric solutions together!
          </Subtitle>
          <Subtitle  variants={itemVariants}>
          Feel free to contact me, master.
          </Subtitle>
          <Card/>
        </TextBox>
        
        </Container>
      
      </Clearfix> 
       </motion.div>
    </>
  );
}

export default About;
