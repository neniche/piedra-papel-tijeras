import React from "react";
import styled from "@emotion/styled";

const WrapperStyled = styled.div`
  max-width: 700px;
  margin: auto;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
