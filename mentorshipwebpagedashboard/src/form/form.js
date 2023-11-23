import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CreateAccount from "./subform.js/CreateAnAccount";
import { MentorDetails } from "./subform.js/MentorDetails";
import { MentorBasicSkills } from "./subform.js/MentorBasicSkills";
import { MentorExpertSkills } from "./subform.js/MentorExpertSkills";
import { GoalsPreferred } from "./subform.js/GoalsPreferred";
import { PersonalityType } from "./subform.js/PersonalityType";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [user, setUser] = React.useState("");

  const handleCredentialsChange = (newCredentials) => {
    setCredentials(newCredentials); //working
  };

  const handleUserType = (userType) => {
    setUser(userType);
  };

  // useEffect(() => {
  //   console.log("asnwer " + credentials.email, credentials.password, user);
  // }, [credentials.email, credentials.password, user]);

  useEffect(() => {
    if (activeStep === 1) {
      //onSubmit();
    }
  }, [activeStep]);

  const steps = [
    {
      label: "Create an account",
      input: (
        <CreateAccount
          onCredentialsChange={handleCredentialsChange}
          userType={handleUserType}
        />
      ),
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        // Signed in
        try {
          const docRef = addDoc(collection(db, user), {
            emailAddress: credentials.email,
            userType: user,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
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
                    disabled={
                      activeStep === 0 &&
                      (credentials.email === "" ||
                        credentials.password === "" ||
                        user === "")
                    }
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
