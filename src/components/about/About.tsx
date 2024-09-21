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
  TextSubtitle
} from './About.styles.ts';
import {MinhaFoto} from '../header/Header.styles.ts';
import minhaFoto from "../../imgs/me.jpg";


function About() {
  return (
    <>
      <GlobalStyle />
      <Clearfix id="about">
          <TextBox>
            <MinhaFoto>
            <img src={minhaFoto} alt="Minha Foto" />
          </MinhaFoto>
            <TextHeader>
              <TextTitle>ABOUT ME</TextTitle>
              <TextSubtitle>A Passionate Developer based in Rio de Janeiro, Brazil. 📍</TextSubtitle>
            </TextHeader>
            <Subtitle>
              I'm Raquel, a 23 year-old student at INFNET College in Rio
              de Janeiro. Currently in my second semester, I am deeply passionate
              about technology and innovation. My heart lies in the realm of User
              Experience (UX) design, where I find joy in crafting seamless digital
              experiences. <br/> I am fueled by curiosity, particularly in the field of
              Artificial Intelligence (AI), and I aspire to delve deeper into its
              intricacies one day. I'm on the lookout for an internship opportunity
              where I can not only apply my existing skills but also foster new ones. <br/>
              My journey in the world of technology is just beginning, and I am
              excited about the possibilities that lie ahead. Let's connect and
              explore how we can create innovative and user-centric solutions
              together.
            </Subtitle>
          </TextBox>
        <DownloadButtonContainer>
              <DownloadButton>
                Download CV
              </DownloadButton>
            </DownloadButtonContainer>
      </Clearfix>
    </>
  );
}

export default About;