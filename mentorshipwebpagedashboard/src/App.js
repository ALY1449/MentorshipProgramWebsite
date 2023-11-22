import "./App.css";
import Container from "@mui/material/Container";
import VerticalLinearStepper from "./form/form";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Container fixed>
        <div className="App">
          <VerticalLinearStepper />
        </div>
      </Container>
    </Box>
  );
}

export default App;
