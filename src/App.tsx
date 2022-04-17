import styled from "styled-components";
import { OnboardingPage } from "./pages";

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <StyledApp>
      <OnboardingPage />
    </StyledApp>
  );
}

export default App;
