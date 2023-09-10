import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


function Social (){
    return(
        <div className="social-icons">
       <a href='https://www.linkedin.com/in/raquelldm/'  target='_blank'> <BsLinkedin size={50} className="icon" /></a>
       <a href='https://github.com/kelldm'  target='_blank'><BsGithub size={50} className="icon" /> </a> 
       <a href='https://www.instagram.com/kelldm_/' target='_blank'> <BsInstagram size={50} className="icon" /></a>
      </div>
  
    );
}

export default Social;