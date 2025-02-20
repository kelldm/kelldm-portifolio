import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Header from "./components/header/Header.tsx";
import About from "./components/about/About.tsx";
import Footer from "./components/footer/Footer.tsx";
import Techstack from "./components/techstack/Techstack.tsx";
import { TechStack } from "./components/header/Header.styles.ts";




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
    
        <Footer/>

      </main>
      
    
     
     
    </div>
  );
};

export default App;