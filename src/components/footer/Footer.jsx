import React from 'react'
import Social from './Social';
import './Footer.css';
import logofooter from "../../imgs/Logo-footer.svg";

function Footer() {
  return (
<footer className='footer'>
        <div className="footer-contact container">
       
            <div className="footer-title">
               
        <img src={logofooter} alt="Logo"  />
     
            </div>
            
            <ul className="footer-list">

            <li>
                    <a href="#" className="footer-link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer-link">Skills</a>
                </li>

                <li>
                    <a href="#contact" className="footer-link">Contact</a>
                </li>
               
            </ul>

            <div className="footer-social">
            <Social/>
            </div>
            <span className='footer-copy'>
                &#169;Raquel Lins. All rights reserved.
            </span>
        </div>
</footer>
  );
}

export default  Footer;
