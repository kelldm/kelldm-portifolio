import React from "react";
import Social from "../header/Social.tsx";
import logofooter from "../../imgs/Logo-footer.svg";
import {
  Footer,
  Item,
  Title,
  Link,
  LinkList,
  FooterSocial,
  FooterCopy
} from './Footer.styles.ts';

function FooterComponent() {
  return (
    <Footer>
        <Title>
          <img src={logofooter} alt="Logo" />
        </Title>

        <LinkList>
          <Item>
            <Link href="#">
              Home
            </Link>
          </Item>

          <Item>
            <Link href="#about">
              About
            </Link>
          </Item>

          <Item>
            <Link href="#skills">
              Skills
            </Link>
          </Item>

          <Item>
            <Link href="#contact">
              Contact
            </Link>
          </Item>
        </LinkList>

      
          <Social color="white"/>
    
        <FooterCopy>
          &#169; Raquel Lins. All rights reserved.
        </FooterCopy>
     
    </Footer>
  );
}

export default FooterComponent;