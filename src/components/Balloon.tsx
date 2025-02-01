import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

const CartoonBalloon = styled(motion.div)<{ width?: string; height?: string }>`
  position: relative;
  background: #fff; /* Cor de fundo branca */
  color: rgb(82, 82, 82); /* Cor do texto */
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid #ff9bc6; /* Borda rosa */
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "auto"};
  font-size: 14px;
  font-family: "Inter", Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: #ff338b;
    font-weight: bold;
  }

  /* Triângulo (ponteiro do balão) */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: #ffff transparent transparent transparent;
    transform: rotate(-40deg);
  }
`;

interface BalloonProps {
  text: string; 
  width?: string; 
  height?: string; 
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Balloon: React.FC<BalloonProps> = ({ text, width, height }) => {
  return (
    <CartoonBalloon variants={itemVariants} width={width} height={height} >
      <TypeAnimation
        sequence={[
          text,
          () => {},
        ]}
        wrapper="span"
        speed={30} 
      />
    </CartoonBalloon>
  );
};

export default Balloon;
