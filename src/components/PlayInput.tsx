import React from 'react';
import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from "framer-motion";


const InputContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  width: 70%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #fff;
  border: 2px solid #FF9BC6;
  border-radius: 25px; 
  outline: none;
  color: #999; 
  font-family: 'Inter', Arial;
  
  &::placeholder {
    color: #ddd; 
  }  
     &:focus {
    border-color: #FF338B; /* Borda rosa mais intensa ao clicar */
  }
`;

const PlayIcon = styled(FaPlay)`
  position: absolute;
  right: 10px;
  font-size: 20px;
  color: #999; 
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #FF338B; 
  }


`;


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const PlayInput = () => {
  const handleClick = () => {
    window.open('https://www.exemplo.com', '_blank');
  };

  return (
    <InputContainer variants={itemVariants}>
      <InputField type="text" placeholder="Tell me how can I help you today..." />
      <PlayIcon onClick={handleClick} />
    </InputContainer>
  );
};

export default PlayInput;
