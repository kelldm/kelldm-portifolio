import React from "react";
import {
   CardContainer, CardDetails, TextTitle, TextBody, Container
  } from "./Card.styles.ts";

function Card() {
  return (
    <>
    <Container>
    <CardContainer>
        <CardDetails>
            <TextTitle>Card title</TextTitle>
            <TextBody>Here are the details of the card</TextBody>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
            <TextTitle>Card title</TextTitle>
            <TextBody>Here are the details of the card</TextBody>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
            <TextTitle>Card title</TextTitle>
            <TextBody>Here are the details of the card</TextBody>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
            <TextTitle>Card title</TextTitle>
            <TextBody>Here are the details of the card</TextBody>
        </CardDetails>
    </CardContainer>
    </Container>
    </>
  );
}

export default Card;
