import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { useGlitch } from 'react-powerglitch';


function Social() {
  const glitch = useGlitch({
    
      "playMode": "hover",
      "createContainers": true,
      "hideOverflow": false,
      "timing": {
        "duration": 250,
        "iterations": 1
      },
      "glitchTimeSpan": {
        "start": 0,
        "end": 1
      },
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.2,
        "amplitudeY": 0.2
      },
      "slice": {
        "count": 6,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.15,
        "hueRotate": true
      },
      "pulse": false
   
  });
  return (
   <div className="footer-social"  >

    <a href='https://www.linkedin.com/in/raquelldm/' ref={glitch.ref} target='_blank'> <BsLinkedin  size={30} className="footer-social-icon" /></a>
       <a href='https://github.com/kelldm' ref={glitch.ref} target='_blank'><BsGithub size={30} className="footer-social-icon" /> </a> 
       <a href='https://www.instagram.com/kelldm_/' ref={glitch.ref} target='_blank'> <BsInstagram size={30} className="footer-social-icon" /></a>


   </div>
  )
}

export default Social;