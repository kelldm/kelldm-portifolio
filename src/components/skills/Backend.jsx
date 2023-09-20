import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";   


export const Backend = () => {
  return (
    <div>
    <h3 className="skills-minititle">Back-end developer</h3>

    <div className="skills-box">
      <div className="skills-group">
        <div className="skills-data">
          <AiOutlineCheckCircle className="skill" />
          <h3 className="skills-name">C#</h3>
          </div>
        <span className="skills-level">Basic</span>
      </div>

      <div className="skills-group">
        <div className="skills-data">
          <AiOutlineCheckCircle className="skill" />
          <h3 className="skills-name">.Net</h3>
          </div>
        <span className="skills-level">Basic</span>
      </div>


      <div className="skills-group">
        <div className="skills-data">
          <AiOutlineCheckCircle className="skill" />
          <h3 className="skills-name">Java</h3>
           </div>
        <span className="skills-level">Basic</span>
      </div>

      <div className="skills-group">
        <div className="skills-data">
          <AiOutlineCheckCircle className="skill" />
          <h3 className="skills-name">MySQL</h3>
          </div>
        <span className="skills-level">Basic</span>
      </div>

    </div>
  </div>
);
}



export default Backend;