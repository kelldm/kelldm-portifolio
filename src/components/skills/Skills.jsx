import React from "react";
import './Skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills(){
    return (
        <div>
          <section className="skills section" id="skills">
            <h3 className="skills-title">SKILLS</h3>
            <h2 className="skills-subtitle">Technologies and Soft-skills</h2>
            <div className="skills-container container grid">
            <div className="skills-content">
            <Frontend />
          </div>
          <div className="skills-content">
            <Backend />
          </div>
              
            </div>
          </section>
        </div>
      );
    }
    
    export default Skills;