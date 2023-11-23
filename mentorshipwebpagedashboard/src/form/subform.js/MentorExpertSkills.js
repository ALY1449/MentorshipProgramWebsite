import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export const MentorExpertSkills = () => {
  return (
    <Box>
      <Container fixed>
        <div>
          <h1>What expert skills do you possess?</h1>
          <div>
            <h2> Two (2) Soft Skills</h2>
            <TextField
              required
              id="outlined-basic"
              label="Expert Soft Skill"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              label="Expert Soft Skill"
              variant="outlined"
            />
          </div>
          <div>
            <h2> Two (2) Industry Skills</h2>
            <TextField
              required
              id="outlined-basic"
              label="Expert Industry Skill"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              label="Expert Industry Skill"
              variant="outlined"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};