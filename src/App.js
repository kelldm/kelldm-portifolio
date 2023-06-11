import React from 'react';
import minhaFoto from './imgs/me.jpg';
import logo from './imgs/logo.svg';
import GlitchImage from './GlitchImage';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import {HiLightBulb, HiOutlineLightBulb} from 'react-icons/hi';

import {SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiSass, SiTailwindcss} from 'react-icons/si';


import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="site-content">

      <div className="content">

        <div className="left-section">
          <h1 className="title">FRONT-END REACT DEVELOPER</h1>
          
          <p className="subtitle">
            Hi! 👋🏻 I’m Raquel Lins. A creative and passionate Front-end Developer based<br></br> in Rio de Janeiro, Brazil.
          </p>

          <div className="social-icons">
           <BsLinkedin size={50} className='icon'/>
           <BsGithub size={50} className='icon'/>
          <BsInstagram size={50} className='icon'/>
          </div>

          <div className="tech-stack">
            <span className="section-title">Tech Stack</span>
           <SiHtml5 className="skill"/>
           <SiCss3 className="skill"/>
           <SiJavascript className="skill"/>
           <SiReact className="skill"/>
           <SiBootstrap className="skill" />
           <SiSass className="skill"/>
          <SiTailwindcss className="skill"/>
          </div>

        </div>
    
    <div className="right-section">
      <GlitchImage src={minhaFoto} alt="Minha Foto" />

    </div>


      </div>
    </div>
    </div>
  );
};

export default App;
