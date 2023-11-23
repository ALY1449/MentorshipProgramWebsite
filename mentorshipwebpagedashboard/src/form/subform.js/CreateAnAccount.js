import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, TextField } from "@mui/material";

const CreateAccount = ({ onCredentialsChange, userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clickedButton, setClickedButton] = useState(null);

  // Pass credentials to the parent component whenever they change
  useEffect(() => {
    onCredentialsChange({ email, password });
  }, [email, password, onCredentialsChange]);

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  useEffect(() => {
    userType(clickedButton);
  }, [clickedButton]);

  return (
    <Box>
      <Container>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => handleButtonClick("Mentor")}>Mentor</Button>
          <Button onClick={() => handleButtonClick("Mentee")}>Mentee</Button>
        </div>
      </Container>
    </Box>
  );
};

export default CreateAccount;
