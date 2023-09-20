import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";

function Frontend() {
  return (
    <div>
      <h3 className="skills-minititle">Front-end developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">HTML</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">JavaScript</h3>
             </div>
          <span className="skills-level">Advanced</span>
        </div>




        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">CSS</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>


        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">React</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>



        
        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">Bootstrap</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>


        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">Tailwind</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">Sass</h3>
            </div>
          <span className="skills-level">Advanced</span>
        </div>


        <div className="skills-group">
          <div className="skills-data">
            <AiOutlineCheckCircle className="skill" />
            <h3 className="skills-name">Git</h3>
            </div>
          <span className="skills-level">Intermediate</span>
        </div>

      </div>
    </div>
  );
}

export default Frontend;
