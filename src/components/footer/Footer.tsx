import React from "react";
import Social from "../header/Social.tsx";
import logofooter from "../../imgs/Logo-footer.svg";
import {
  Footer,
  Item,
  Title,
  Link,
  LinkList,
  FooterCopy
} from './Footer.styles.ts';

function FooterComponent() {
  return (
    <Footer>
        <FooterCopy>
          &#169; Raquel Lins. All rights reserved.
        </FooterCopy>
     
    </Footer>
  );
}

export default FooterComponent;