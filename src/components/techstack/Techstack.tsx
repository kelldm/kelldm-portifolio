import { useState } from "react"; 
import React from "react";
import techan from "../../imgs/techan.png";
import { motion } from "framer-motion";
import { Container, TextContainer, SymbolContainer, SymbolBox, Hime,Title } from "./Techstack.styles.ts";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiStyledcomponents,SiTypescript, SiSass, SiTailwindcss, SiGit,SiCypress   } from "react-icons/si";


const symbols = [


  { id: 1, text: "Git is a distributed version control system used to track changes in code and collaborate on software development.", icon: <SiGit /> },
  { id: 2, text: "HTML is the standard language used to create and structure content on the web.", icon: <FaHtml5 /> },
  { id: 3, text: "CSS is a language used to style and layout web pages, including design, colors, and fonts.", icon: <FaCss3Alt /> },
  { id: 4, text: "JavaScript is a programming language used to create interactive and dynamic content on websites.", icon: <FaJs /> },
  { id: 5, text: "TypeScript is a superset of JS that adds static typing and features for improved development and reliability.", icon: <SiTypescript  /> },
  { id: 6, text: "React is a JavaScript library for building user interfaces, focusing on reusable components and efficient rendering.", icon: <FaReact /> },
  { id: 7, text: "Node.js is a JavaScript runtime for server-side scripting and scalable applications.", icon: <FaNodeJs /> },
  { id: 8, text: "Cypress is a testing framework for web applications, providing fast and reliable end-to-end testing.", icon: <SiCypress /> },
  { id: 9, text: "Styled Components is a library for styling React components using tagged template literals.", icon: <SiStyledcomponents /> },
  { id: 10, text: "SASS is a CSS preprocessor that extends CSS with variables, nested rules, and functions for better styling.", icon: <SiSass /> },
  { id: 11, text: "Tailwind CSS is a utility-first CSS framework for building custom designs quickly using predefined classes.", icon: <SiTailwindcss /> },
];

const textVariants = {
  hidden: { opacity: 1 },  
  visible: { opacity: 1, transition: { duration: 0.5 } } 
};

export default function Techstack() {
  const [hoverText, setHoverText] = useState("Here are some of my habilities with coding languages, feel free to explore, I’ll explain anyone to you.");

  return (
    <Container>
      <Title>My sweet stack</Title>
      <TextContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {hoverText}
        </motion.div>
      </TextContainer>
      <SymbolContainer>
      <Hime src={techan} alt="Hime"/>

        {symbols.map(({ id, text, icon }) => (
          <SymbolBox
            key={id}
            onMouseEnter={() => setHoverText(text)}
            onMouseLeave={() => setHoverText("Here are some of my habilities with coding languages, feel free to explore, I’ll explain anyone to you.")}
          >
            {icon}
          </SymbolBox>
        ))}
      </SymbolContainer>
    </Container>
  );
}
