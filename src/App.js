import React from "react";
import minhaFoto from "./imgs/me.jpg";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { useGlitch } from "react-powerglitch";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const glitch = useGlitch();

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="site-content">
        <div className="content">
          <div className="left-section">
            <h1 className="title">FRONT-END REACT DEVELOPER</h1>

            <p className="subtitle">
              Hi! 👋🏻 I’m Raquel Lins. A creative and passionate Front-end
              Developer based<br></br> in Rio de Janeiro, Brazil.
            </p>

            <div className="social-icons">
              <BsLinkedin size={50} className="icon" />
              <BsGithub size={50} className="icon" />
              <BsInstagram size={50} className="icon" />
            </div>

            <div className="tech-stack">
              <span className="section-title">Tech Stack</span>
              <SiHtml5 className="skill" />
              <SiCss3 className="skill" />
              <SiJavascript className="skill" />
              <SiReact className="skill" />
              <SiBootstrap className="skill" />
              <SiSass className="skill" />
              <SiTailwindcss className="skill" />
            </div>
          </div>

          <div className="right-section">
            <img src={minhaFoto} alt="Minha Foto" ref={glitch.ref} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;