import React from "react";
import styled from "@emotion/styled";

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
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
`;

function Score() {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  );
}

export default Score;
