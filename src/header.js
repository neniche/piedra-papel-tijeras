import React from "react";
import styled from "@emotion/styled";
import Score from "./score.js";

const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, 0.29);

  border-radius: 0.5em;
  h1 {
    font-size: 21px;
    text-transform: uppercase;
    line-height: 20px;
    font-weight: 700;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 36px;
      line-height: 0.9;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock <br /> Paper <br /> Scissors
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
