import React from 'react';
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiBootstrap,
    SiSass,
    SiTailwindcss,
  } from "react-icons/si";
  import minhaFoto from "../../imgs/me.jpg";
  import { useGlitch } from "react-powerglitch";
  import Social from "./Social";
  import "./Home.css";



function Home () {
    const glitch = useGlitch();

return (
<div className="site-content">
  <div className="content">
    <div className="left-section">
      <h1 className="title">FRONT-END REACT DEVELOPER</h1>
        <p className="subtitle">
          Hi! 👋🏻 I’m Raquel Lins. A creative and passionate Front-end
          Developer based<br></br> in Rio de Janeiro, Brazil.
        </p>
            
          <Social/>
        
          <div className="tech-stack">
            <span className="section-title">Tech Stack</span>
            <SiHtml5 className="skill"/>
            <SiCss3 className="skill"/>
            <SiJavascript className="skill"/>
            <SiReact className="skill"/>
            <SiBootstrap className="skill"/>
            <SiSass className="skill"/>
            <SiTailwindcss className="skill"/>
          </div>
         </div>

    <div className="right-section">
      <div className='minhafoto'>
      <img src={minhaFoto} alt="Minha Foto" ref={glitch.ref}/></div>
    </div>
  </div>
</div>

);
}

export default Home;

