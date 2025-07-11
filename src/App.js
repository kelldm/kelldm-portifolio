import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Header from "./components/header/Header.tsx";
import About from "./components/about/About.tsx";
import Footer from "./components/footer/Footer.tsx";
import Techstack from "./components/techstack/Techstack.tsx";
import Services from "./components/services/Services.tsx";
import MusicPlayer from "./components/music/Music.jsx";
import AccordionUsage from "./components/accordion/Accordion.tsx";
import Projects from "./components/projects/Projects.tsx";






const App = () => {

  return (

    <div className="App">

      {/* Navbar */}
      <Navbar />
     
      <main className="main">
         {/* Content */}
        <Header/>
         <About/>
         <Techstack/>
         <Services/>
          <Projects/>
          <AccordionUsage/>
        <Footer/>

      </main>
      
    
     
     
    </div>
  );
};

export default App;