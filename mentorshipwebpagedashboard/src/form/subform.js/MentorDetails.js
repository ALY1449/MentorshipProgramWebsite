import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export const MentorDetails = ({ onHandleDetailsChange }) => {
  const [fullname, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [industry, setIndustry] = useState(null);
  const [specialisation, setSpecialisation] = useState(null);

  useEffect(() => {
    onHandleDetailsChange({ fullname, organisation, industry, specialisation });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullname, industry, organisation, specialisation]);

  return (
    <Box>
      <Container>
        <div>
          <TextField
            required
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Organisation"
            variant="outlined"
            onChange={(e) => setOrganisation(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Industry"
            variant="outlined"
            onChange={(e) => setIndustry(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Specialisation"
            variant="outlined"
            onChange={(e) => setSpecialisation(e.target.value)}
          />
        </div>
      </Container>
    </Box>
  );
};
