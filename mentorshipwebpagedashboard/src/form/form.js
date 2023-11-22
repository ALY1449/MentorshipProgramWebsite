import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import { CreateAccount } from "./subform.js/CreateAnAccount";

const MentorDetails = () => {
  return (
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
  );
};

const MentorBasicSkills = () => {
  return (
    <Box>
      <Container fixed>
        <div>
          <h1>What basic skills do you possess?</h1>
          <div>
            <h2> Two (2) Soft Skills</h2>
            <TextField
              required
              id="outlined-basic"
              label="Basic Soft Skill"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              label="Basic Soft Skill"
              variant="outlined"
            />
          </div>
          <div>
            <h2> Two (2) Industry Skills</h2>
            <TextField
              required
              id="outlined-basic"
              label="Basic Industry Skill"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              label="Basic Industry Skill"
              variant="outlined"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

const MentorExpertSkills = () => {
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

const GoalsPreferred = () => {
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

const PersonalityType = () => {
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
const steps = [
  {
    label: "Create an account",
    input: CreateAccount(),
  },
  {
    label: "Details",
    input: MentorDetails(),
  },
  {
    label: "Basic Skills",
    input: MentorBasicSkills(),
  },
  {
    label: "Expert Skills",
    input: MentorExpertSkills(),
  },
  {
    label: "Goals",
    input: GoalsPreferred(),
  },
  {
    label: "Personality Type",
    input: PersonalityType(),
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 700 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 5 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <div>{step.input}</div>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
