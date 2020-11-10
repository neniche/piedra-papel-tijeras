import "./App.css";
import Header from "./header";
import Wrapper from "./wrapper";
import Table from "./table";
import Rules from "./rules";
import styled from "@emotion/styled";

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;

  .app-content {
    padding: 2em;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
