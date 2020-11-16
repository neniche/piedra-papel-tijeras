import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const shadow = keyframes`
to{
  
  box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
  transform: rotateZ(360deg) scale(1.1);
}
`;
const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 15px solid ${({ color }) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  background: ${({ name }) => (name === "default" ? "#122343" : "white")};
  box-shadow: 0 5px 0 ${({ color }) => color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  animation: 1s ${shadow} infinite;
  ${({ isShadowAnimated }) =>
    isShadowAnimated &&
    "box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);"}
  animation: 1s ${({ isShadowAnimated }) =>
    isShadowAnimated ? shadow : ""} forwards;

  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0 -5px 0 ${({ name }) => (name === "default" ? "transparent" : "#bbc0d5")};
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 195px;
  }
`;

const colors = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
  default: {
    base: "#15294d",
    border: "#15294d",
  },
};

function Token({ name = "default", onClick, isShadowAnimated = false }) {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }
  const color = colors[name];
  return (
    <TokenStyled
      color={color}
      onClick={handleClick}
      name={name}
      isShadowAnimated={isShadowAnimated}
    >
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </TokenStyled>
  );
}

export default Token;
