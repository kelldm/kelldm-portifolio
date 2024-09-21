import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Header from "./components/header/Header.tsx";
import About from "./components/about/About.tsx";
import Footer from "./components/footer/Footer.tsx";



const App = () => {

  return (

    <div className="App">
      {/* Navbar */}
      <Navbar />
     
      <main className="main">
         {/* Content */}
        <Header/>
        <About/>
     <Footer/>

      </main>
      
    
     
     
    </div>
  );
};

export default App;