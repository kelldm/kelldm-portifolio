import React from "react";
import './About.css';
import riodejaneiro from "../../imgs/riodejaneiro.jpg";
import DownloadButton from "./DownloadButton";
import amoung from '../../imgs/amoungus.png';

function About (){
    return(
                 <div id="about">
                    <div className="clearfix centered-content">
                        <div className="image-left">
                   <div className="rjdiv"> <img  src={riodejaneiro} alt="Rio de Janeiro" /></div>
                    <div className="amoungus"> <img src={amoung}></img></div>
                    </div>

                    <div className="text-box">
                    <div className="text-header">
                     <h3 className="text-title">ABOUT ME</h3>
                         <h2 className="text-subtitle">A Passionate Developer based in Rio de Janeiro, Brazil.  📍</h2>
                         </div>
                         <p className="subtitle">
                         I'm Raquel, a 22-year-old student at INFNET College in Rio
                        de Janeiro. Currently in my second semester, I am deeply passionate
                        about technology and innovation. My heart lies in the realm of User
                        Experience (UX) design, where I find joy in crafting seamless digital
                        experiences. <br/> I am fueled by curiosity, particularly in the field of
                        Artificial Intelligence (AI), and I aspire to delve deeper into its
                        intricacies one day. I'm on the lookout for an internship opportunity
                        where I can not only apply my existing skills but also foster new ones. <br/>
                        My journey in the world of technology is just beginning, and I am
                        excited about the possibilities that lie ahead. Let's connect and
                        explore how we can create innovative and user-centric solutions
                        together.
                         </p>
                        <DownloadButton/>
                    </div>
                </div>
            </div>
    );
}

export default About;