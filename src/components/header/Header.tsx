import React from "react";
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
import { useGlitch } from "react-powerglitch";
import Social from "./Social.tsx";
import {
  SiteContent,
  Title,
  Subtitle,
  TechStackTitle,
  TechStack,
  MinhaFoto,
  float,
  Gato,
  Space,
} from "./Header.styles.ts";
import { TypeAnimation } from "react-type-animation";
import FloatingImage from "./FloatingImage.jsx";

const Header = () => {
  const glitch = useGlitch();

  return (
    <SiteContent>
      <Title ref={glitch.ref}>HELLO, WORLD.</Title>
      <TypeAnimation
        sequence={[
          3000,
          "Welcome!",
          2000,
          "Welcome,",
          200,
          "Welcome, good to see you!",
          4000,
          ":)",
          3000,
        ]}
        speed={50}
        style={{ fontSize: "2em", fontWeight: "900", alignItems: "left" }}
        repeat={Infinity}
      />
     <FloatingImage/>

      <Subtitle>
        I’m Raquel Lins. A creative and passionate Front-end Developer based in
        Rio de Janeiro, Brazil.
        <br />I love games, technology and animals.
      </Subtitle>
      <Social />

      <Space />

      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechStack>
        <SiHtml5 className="item" />
        <SiCss3 className="item" />
        <SiJavascript className="item" />
        <SiReact className="item" />
        <SiBootstrap className="item" />
        <SiSass className="item" />
        <SiTailwindcss className="item" />
        <SiStyledcomponents className="item" />
      </TechStack>
    </SiteContent>
  );
};

export default Header;
