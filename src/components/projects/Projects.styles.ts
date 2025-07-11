import styled from "styled-components";



export const Title = styled.h2`
 font-family:'Kotta One', sans serif;
  padding-bottom:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size: 60px;
  display:flex;
  color: #FFFF;
  margin-top:300px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  border-radius: 16px;
  overflow: hidden; /* Importante para as imagens não ultrapassarem */
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  position: relative;
  margin-top: 1rem;
  border: 2px solid rgb(255, 121, 183);
  transition: 0.5s ease-out;

  &:hover {
    border-color: #FF9BC6;
    box-shadow: 0 4px 18px 0 rgba(255, 25, 159, 0.25);
  }
`;

export const Project = styled.div`
  flex: 1;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }

   img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

`;

export const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;