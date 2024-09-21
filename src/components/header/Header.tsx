import React from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents
} from "react-icons/si";
import minhaFoto from "../../imgs/me.jpg";
import { useGlitch } from "react-powerglitch";
import Social from "./Social.tsx";
import {
  SiteContent,
  Title,
  Subtitle,
  TechStackTitle,
  TechStack,
  MinhaFoto,
  Space
} from './Header.styles.ts';
import { TypeAnimation } from 'react-type-animation';




const Header = () => {
  const glitch = useGlitch(); // Chama o hook useGlitch aqui

  return (
    <SiteContent>
        <Title ref={glitch.ref}>HELLO, WORLD.</Title>
        <TypeAnimation
      sequence={[
        3000,
        'Welcome!', // Types 'One'
        2000, // Waits 1s
        'Welcome,', // Deletes 'One' and types 'Two'
        200, // Waits 2s
        'Welcome, good to see you.', // Types 'Three' without deleting 'Two'
        4000, // Waits 2s
        ':)', // Types 'Three' without deleting 'Two'
        6000, // Waits 2s
        'You are safe here.', // Types 'Three' without deleting 'Two'
        4000, // Waits 1s
        'I promise.', 
        4000, 
        ':)', // Types 'Three' without deleting 'Two'
        8000, 
      ]}
      speed={{type: 'keyStrokeDelayInMs', value: 200}}
      style={{ fontSize: '2em', fontWeight:'900' }}
      repeat={Infinity}
    /> 
    <Subtitle>
        I’m Raquel Lins. A creative and passionate Front-end Developer based in Rio de Janeiro, Brazil.<br/>
        I love games, technology and animals.
        </Subtitle>
        <Social />
      <Space/>
          <TechStackTitle>Tech Stack</TechStackTitle>
          <TechStack> 
          <SiHtml5 className="item"/>
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
