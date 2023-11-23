import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";

export const PersonalityType = () => {
  return (
    <Box>
      <Container>
        <div>
          <h3>1.) Click the link below to conduct a personality test</h3>
          <Link href="#">
            https://www.16personalities.com/free-personality-test
          </Link>
          <h3>2.) Enter your personality type</h3>
          <div style={{ maxWidth: "500px" }}>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div>
        </div>
      </Container>
    </Box>
  );
};
