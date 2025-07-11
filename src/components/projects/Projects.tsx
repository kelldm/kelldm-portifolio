import React from "react";
import {  Project,  Container, Title, Link } from "./Projects.styles.ts";
import doc from "../../imgs/doc.png";
import flower from "../../imgs/flower.png";
import pynance from "../../imgs/pynance.png";
import bond from "../../imgs/bondware.png";



function Projects() {
  return (
    <>
      <Title>UI Projects</Title>
      <Container>
        <Project>
          <Link href="https://exemplo1.com" target="_blank" rel="noopener noreferrer">
            <img src={bond} alt="Projeto 1" />
          </Link>
        </Project>

        <Project>
          <Link href="https://exemplo2.com" target="_blank" rel="noopener noreferrer">
            <img src={flower} alt="Projeto 2" />
          </Link>
        </Project>

        <Project>
          <Link href="https://exemplo3.com" target="_blank" rel="noopener noreferrer">
            <img src={pynance} alt="Projeto 3" />
          </Link>
        </Project>

        <Project>
          <Link href="https://exemplo4.com" target="_blank" rel="noopener noreferrer">
            <img src={doc} alt="Projeto 4" />
          </Link>
        </Project>
      </Container>
    </>
  );
}

export default Projects;
