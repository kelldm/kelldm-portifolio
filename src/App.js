import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";


const App = () => {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <main className="main">
        <Home/>
      </main>
     
    </div>
  );
};

export default App;