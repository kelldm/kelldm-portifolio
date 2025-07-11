import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top:200px;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.div`
  font-family:'Kotta One', sans serif;
  padding-bottom:100px;
  font-size: 60px;
  display:flex;
  color: #FFFF;
`;

export const TextContainer = styled.div`
  width:450px;
  position: relative;
  background: #fff; /* Cor de fundo branca */
  color: rgb(82, 82, 82); /* Cor do texto */
  padding: 10px 15px;
  margin-bottom: 100px;
  border-radius: 10px;
  border: 2px solid #ff9bc6; /* Borda rosa */
  font-size: 16px;
  font-family: "Inter", Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  .highlight {
    color: #ff338b;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: #ffff transparent transparent transparent;
    transform: rotate(-220deg);
  }
`;


export const SymbolContainer = styled.div`
position:relative;
  display: flex;
  flex-wrap: wrap;
  height: 280px;
  width:1175px;
  justify-content: flex-start;
  gap: 25px;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
`;

export const SymbolBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: #ec4899;
  display: flex;
  border-radius:8px;
  border: 2px solid #ec4899;
  align-items: center;
  justify-content: center;
  z-index: 2;
cursor: url('http://www.rw-designer.com/cursor-extern.php?id=94532'), pointer;
  transition: background-color 0.3s;

    svg {
    width: 100px;
    height: 100px;
    color: white;
  }
     

  &:hover {
      background-color: #ffff;
      color: #ec4899;
     svg {
      color: #ec4899;
     } 
  }
`;
export const Hime = styled.img`
  position: absolute; 
  top: -120%; 
  left: 0; 
  width: 400px; 
  height: auto;
  z-index: 0; 
`;

