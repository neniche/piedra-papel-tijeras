import React, { useState } from "react";
import styled from "@emotion/styled";
import Token from "./token";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .line {
    display: ${({ playing }) => (!playing ? "block" : "none")};
    height: 13px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 60px;
    &:before {
      content: "";
      height: 13px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: "";
      height: 13px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
`;

function Table() {
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState("");
  function onClick(name) {
    console.log(name);
    setPlaying(true);
    setPick(name);
  }
  return (
    <TableStyled playing={playing}>
      <span className="line"></span>
      {!playing ? (
        <>
          <Token name="paper" onClick={onClick} />
          <Token name="scissors" onClick={onClick} />
          <Token name="rock" onClick={onClick} />
        </>
      ) : (
        <Token name={pick} />
      )}
    </TableStyled>
  );
}

export default Table;
