import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export const GoalsPreferred = () => {
  return (
    <Box>
      <Container>
        <div>
          <h1> I prefer a mentee with goals of:</h1>
          <TextField
            required
            id="outlined-basic"
            label="Goal 1"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Goal 2"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Goal 3"
            variant="outlined"
          />
        </div>
      </Container>
    </Box>
  );
};
