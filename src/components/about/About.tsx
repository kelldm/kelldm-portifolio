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
  Container
} from "./About.styles.ts";
import { MinhaFoto } from "../header/Header.styles.ts";
import minhaFoto from "../../imgs/me.jpg";

function About() {
  return (
    <>
      <GlobalStyle />
      <Clearfix id="about">
        <Container>
        <MinhaFoto>
            <img src={minhaFoto} alt="Minha Foto" />
          </MinhaFoto>
        <TextBox>
          <TextHeader>
            <TextTitle>ABOUT ME</TextTitle>
            <TextSubtitle>
              A Passionate Developer based in Rio de Janeiro, Brazil. 📍
            </TextSubtitle>
            {/* https://tenor.com/pt-BR/view/gatuwu-gif-12909478339905065526 */}
          </TextHeader>
          <Subtitle>
            I'm Raquel, a 23-year-old student at INFNET College in Rio de
            Janeiro, currently in my fourth semester. I’m interning as a
            front-end developer at Sys Manager, working on projects for the
            client Globo. I'm deeply passionate about technology and innovation,
            with a strong focus on User Experience (UX) design, where I love
            creating seamless digital experiences. In addition to my curiosity
            for Artificial Intelligence (AI), I am also deeply passionate about
            video games and interested in exploring this field further. I’m
            always eager to apply my existing skills while also learning new
            ones. My journey in technology is just beginning, and I am excited
            about the possibilities ahead. Let’s connect and explore how we can
            create innovative, user-centric solutions together!
          </Subtitle>
          <DownloadButtonContainer>
          <DownloadButton>Download CV</DownloadButton>
        </DownloadButtonContainer>
        </TextBox>
        </Container>
        
      </Clearfix>
    </>
  );
}

export default About;
