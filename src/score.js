import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ScoreContext } from "./App";

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: -5px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
      font-size: 60px;
    }
  }
`;

function Score() {
  const { score } = useContext(ScoreContext);
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  );
}

export default Score;
