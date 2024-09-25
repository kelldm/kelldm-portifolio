import React from "react";
import {
   CardContainer, CardDetails, TextTitle, TextBody, Container, Title
  } from "./Card.styles.ts";

function Card() {
  return (
    <><Title>Diferenciais</Title>
    <Container>     
    <CardContainer>
        <CardDetails>
            <TextTitle>Interface de Alta fidelidade</TextTitle>
            <TextBody>Implemento fielmente a interface, prezando pela melhor experiência do usuário.</TextBody>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
            <TextTitle>Metodologias Ágeis</TextTitle>
            <TextBody>Feedbacks, interações constantes, garantindo agilidade e eficiência.</TextBody>
        </CardDetails>
    </CardContainer>

    <CardContainer>
        <CardDetails>
            <TextTitle>Clean Code</TextTitle>
            <TextBody>Seguindo as melhores práticas do mercado para desenvolver e manter a qualidade do código.</TextBody>
        </CardDetails>
    </CardContainer>

    </Container>
    </>
  );
}

export default Card;
