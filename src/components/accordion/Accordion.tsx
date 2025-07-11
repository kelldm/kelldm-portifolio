import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import hime from "../../imgs/questions.png"
import { useState } from 'react';



const CustomAccordion = styled(Accordion)`
  width:800px;
  height:60%vh;
  border: 1px solid 'gray';
   font-family: 'Inter', sans-serif;
  
  border-radius: 10px;

  .MuiAccordionSummary-root {
    padding: 24px; /* mais espaçamento interno */
  }

  .MuiAccordionDetails-root {
    padding: 25px;
  }


`;

const Container = styled.div`
margin-top:300px;
 display:flex;
 align-items: center;
justify-content: center;
flex-direction:row;
margin-bottom:100px;
background-color: #ffff;
height:80vh;
`;
const Box = styled.div`
width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

 const Title = styled.div`
  font-family:'Kotta One', sans serif;
  padding-bottom:100px;
  font-size: 60px;
  color: pink;
`;
 const Hime = styled.img`
   width: 50%;
  height: auto;
  object-fit: contain;

`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;





export default function AccordionUsage() {

const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  setExpandedPanel(isExpanded ? panel : false);
};



  return (
    <Container>
      <ContentWrapper>
      <Box>
        <CustomAccordion  expanded={expandedPanel === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF007F' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FF007F',  fontFamily: 'Inter' }}>
          What was the first code I ever wrote?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          The first code I ever wrote was a "Hello, world!" in Portugol, after a friend sent me a video by Gustavo Guanabara saying, "I think you're going to like this." From that moment on, I never stopped.

        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expandedPanel === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF007F' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FF007F',  fontFamily: 'Inter' }}>
          What about User Experience?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          User experience means everything to me. I believe we need to code with purpose. <i>"How will the user feel when they see this screen? Will they easily find what they need? What paths might they take, and how can I make everything simpler for them with a great and friendly experience?"</i> I love front-end development, but even more than that, I love delivering well-thought-out solutions with a flawless user experience.

        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expandedPanel === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF007F' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FF007F', fontFamily: 'Inter' }}>
          Tools I can’t live without?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          I can't live without Figma and Google Keep. I love using Figma to bring future front-end project ideas to life, and I love Keep for organizing thoughts, lists, schedules—everything. It's simple, practical, and straightforward. I highly recommend it.

        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expandedPanel === 'panel4'}
        onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF007F' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FF007F',  fontFamily: 'Inter' }}>
          How do I handle bugs and frustrations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          When I find a bug, I document the step-by-step process with screenshots showing how I discovered it and what unexpected behavior it produces. After that, I share it with the team, already fully documented so they can understand what happened and test to see if it’s consistent. Some bugs are inconsistent, which makes them harder to diagnose—but not impossible.

To address them, I replicate the steps and try to investigate the root cause logically, working backward (I’ve even encountered cases where the bug was actually caused by the library itself!). It’s important to be creative when debugging—anything could be the cause. But when I feel stuck after trying everything, I ask the team for help. Always ask for help :)

        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion expanded={expandedPanel === 'panel5'}
        onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#FF007F' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 'bold', color: '#FF007F',  fontFamily: 'Inter' }}>
          My dream project I’d love to work on?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          I'm obsessed with animals—it's a passion of mine. My dream is to work on a pet shop project where I can put my ideas and skills into practice, all while being surrounded by a theme I absolutely love.
        </AccordionDetails>
      </CustomAccordion> </Box>
       <Hime src={hime} alt="Hime"/>
       
</ContentWrapper>      

    </Container>
  );
}