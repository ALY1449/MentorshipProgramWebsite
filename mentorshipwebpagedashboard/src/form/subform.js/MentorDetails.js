import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export const MentorDetails = () => {
  return (
    <Box>
      <Container>
        <div>
          <TextField
            required
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Organisation"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Industry"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Specialisation"
            variant="outlined"
          />
        </div>
      </Container>
    </Box>
  );
};
