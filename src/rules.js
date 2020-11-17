import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "./button";

const RulesStyled = styled.div`
  text-align: center;
  &::before {
    content: "";
    z-index: 2;
    display: ${({ visible }) => (visible ? "block" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .close-button {
    margin-top: 2em;
    cursor: pointer;
  }
  .rules-overlay {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: 700;
      font-family: Arial;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 5em;
      bottom: 2em;
    }
    .rules-overlay {
      width: 500px;
      border-radius: 30px;
      margin: auto;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      box-sizing: border-box;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1em 0;
      }
    }
    .close-button {
      position: absolute;
      right: 2em;
      top: 0.8em;
    }
  }
`;

function Rules() {
  const [visible, setVisible] = useState(false);
  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled visible={visible}>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="game rules" />
          <img
            className="close-button"
            onClick={handleToggleClick}
            src="./images/icon-close.svg"
            alt="close button"
          />
        </div>
      )}
      <Button onClick={handleToggleClick} className="button">
        Rules
      </Button>
    </RulesStyled>
  );
}

export default Rules;
