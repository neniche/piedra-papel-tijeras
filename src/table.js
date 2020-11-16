import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Token from "./token";
import { WhiteButton } from "./button";
import { ScoreContext } from "./App";

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
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0.1px;
  }
  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }
  .line {
    display: ${({ playing }) => (!playing ? "block" : "none")};
    height: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 200px;
    /* left: 60px;
    right: 60px; */
    top: 58px;
    &:before {
      content: "";
      height: 14px;
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
      height: 14px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-gap: 30px 1px;
    .line {
      width: 400px;
    }
  }
`;
const elements = ["paper", "scissors", "rock"];

function Table() {
  // const [score, setScore] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const [results, setResults] = useState("");
  const [housePick, setHousePick] = useState("default");
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState("");
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        console.log(pick);
        setHousePick(pick);
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }
  async function onClick(name) {
    setPlaying(true);
    setPick(name);
    const house = await launchHousePick();
    console.log("La casa eligio", house);
    const results = victory(name, house);
    console.log(results);
    setResults(results);
    if (results === "win") {
      setScore(score + 1);
    }
  }
  function victory(pick, housePick) {
    if (housePick === pick) {
      return "draw";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "rock") {
        return "win";
      }
    }
    if (pick === "scissors") {
      if (housePick === "paper") {
        return "win";
      }
      if (housePick === "rock") {
        return "lose";
      }
    }
    if (pick === "rock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
    }
  }

  function handlePlayAgainClick() {
    setPlaying(false);
    setResults("");
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
        <>
          <div className="in-game">
            <Token name={pick} isShadowAnimated={results === "win"} />
            <p>You Picked</p>
          </div>
          <div className="in-game">
            <Token name={housePick} isShadowAnimated={results === "lose"} />
            <p>The house Picked</p>
          </div>
          <div className="results">
            {results && (
              <>
                <h2>YOU {results}</h2>
                <WhiteButton onClick={handlePlayAgainClick}>
                  Play again
                </WhiteButton>
              </>
            )}
          </div>
        </>
      )}
    </TableStyled>
  );
}

export default Table;
