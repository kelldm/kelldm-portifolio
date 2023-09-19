import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";


const App = () => {

  return (

    <div className="App">
      {/* Navbar */}
      <Navbar />
     
      <main className="main">
         {/* Content */}
        <Home/>
        <About/>
      </main>
     
    </div>
  );
};

export default App;