import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SocialIcons, SocialLink } from './Social.styles.ts';

interface SocialProps {
  color?: 'white' | 'black';
}

function Social({ color = 'black' }: SocialProps) {
  return (
    <SocialIcons>
      <SocialLink href='https://www.linkedin.com/in/raquelldm/' target='_blank' color={color}>
        <BsLinkedin size={40} />
      </SocialLink>
      <SocialLink href='https://github.com/kelldm' target='_blank' color={color}>
        <BsGithub size={40} />
      </SocialLink>
      <SocialLink href='https://www.instagram.com/kelldm_/' target='_blank' color={color}>
        <BsInstagram size={40} />
      </SocialLink>
    </SocialIcons>
  );
}

export default Social;