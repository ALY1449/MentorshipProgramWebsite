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
import { collection, setDoc, doc, addDoc } from "firebase/firestore";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [userType, setUser] = React.useState("");
  const [details, setDetails] = React.useState({
    fullname: "",
    organisation: "",
    industry: "",
    specialisation: "",
  });
  const [mentorBSkills, setMentorBSkills] = React.useState({
    softskills: [],
    industryskills: [],
  });
  const [mentorESkills, setMentorESkills] = React.useState({
    softskills: [],
    industryskills: [],
  });

  const handleDetailsChange = (newDetails) => {
    setDetails(newDetails);
  };

  const handleCredentialsChange = (newCredentials) => {
    setCredentials(newCredentials); //working
  };

  const handleUserType = (userType) => {
    setUser(userType);
  };

  const handleMBasicSkills = (newMentorBSkills) => {
    setMentorBSkills(newMentorBSkills);
  };
  const handleEBasicSkills = (newMentorESkills) => {
    setMentorESkills(newMentorESkills);
  };

  // useEffect(() => {
  //   console.log(
  //     "asnwer ",
  //     mentorBSkills.softskills,
  //     mentorBSkills.industryskills
  //   );
  // }, [mentorBSkills.industryskills, mentorBSkills.softskills]);

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
      input: [
        {
          participant: "Mentor",
          subform: (
            <MentorDetails onHandleDetailsChange={handleDetailsChange} />
          ),
        },
        { participant: "Mentee", subform: null },
      ],
    },
    {
      label: "Basic Skills",
      input: [
        {
          participant: "Mentor",
          subform: (
            <MentorBasicSkills onHandleMBasicSkills={handleMBasicSkills} />
          ),
        },
        { participant: "Mentee", subform: null },
      ],
    },
    {
      label: "Expert Skills",
      input: [
        {
          participant: "Mentor",
          subform: (
            <MentorExpertSkills onHandleEBasicSkills={handleEBasicSkills} />
          ),
        },
        { participant: "Mentee", subform: null },
      ],
    },
    {
      label: "Goals",
      input: [
        { participant: "Mentor", subform: GoalsPreferred() },
        { participant: "Mentee", subform: GoalsPreferred() },
      ],
    },
    {
      label: "Personality Type",
      input: [
        { participant: "Mentor", subform: PersonalityType() },
        { participant: "Mentee", subform: GoalsPreferred() },
      ],
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

  useEffect(() => {
    if (activeStep === 4) {
      onSubmit();
    }
  }, [activeStep]);

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        // Signed in
        try {
          const userID = auth.currentUser;
          const collectionRef = collection(db, userType);
          const userUID = userID.uid;
          const userDocRef = doc(collectionRef, userUID);
          //console.log(userID.uid);
          const accountRef = doc(userDocRef, "account", userUID);
          const detailsRef = doc(userDocRef, "details", userUID);
          const basicSoftSkillsRef = doc(
            userDocRef,
            "basicSoftSkills",
            userUID
          );
          const basicIndustrySkillsRef = doc(
            userDocRef,
            "basicIndustrySkills",
            userUID
          );

          const expertSoftSkillsRef = doc(
            userDocRef,
            "expertSoftSkills",
            userUID
          );
          const expertIndustrySkillsRef = doc(
            userDocRef,
            "expertIndustrySkills",
            userUID
          );

          const accountData = {
            emailAddress: credentials.email,
            userType: userType,
          };
          const detailsData = {
            fullname: details.fullname,
            organisation: details.organisation,
            industry: details.industry,
            specialisation: details.specialisation,
          };

          const basicSoftSkillsData = {
            softSkill_1: mentorBSkills.softskills[0],
            softSkill_2: mentorBSkills.softskills[1],
          };
          const basicIndustrySkillsData = {
            industrySkill_1: mentorBSkills.industryskills[0],
            industrySkill_2: mentorBSkills.industryskills[1],
          };

          const expertSoftSkillsData = {
            softSkill_1: mentorESkills.softskills[0],
            softSkill_2: mentorESkills.softskills[1],
          };
          const expertIndustrySkillsData = {
            industrySkill_1: mentorESkills.industryskills[0],
            industrySkill_2: mentorESkills.industryskills[1],
          };
          setDoc(accountRef, accountData)
            .then(() => {
              console.log("Account added with custom ID successfully.");
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          setDoc(detailsRef, detailsData)
            .then(() => {
              console.log("Details added with custom ID successfully.");
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          setDoc(basicSoftSkillsRef, basicSoftSkillsData)
            .then(() => {
              console.log(
                "Basic Soft skills added with custom ID successfully."
              );
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          setDoc(basicIndustrySkillsRef, basicIndustrySkillsData)
            .then(() => {
              console.log(
                "Basic Industry skills added with custom ID successfully."
              );
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          setDoc(expertSoftSkillsRef, expertSoftSkillsData)
            .then(() => {
              console.log(
                "Expert Soft skills added with custom ID successfully."
              );
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          setDoc(expertIndustrySkillsRef, expertIndustrySkillsData)
            .then(() => {
              console.log(
                "Expert industry skills added with custom ID successfully."
              );
            })
            .catch((error) => {
              console.error("Error adding personal details:", error);
            });

          console.log("Document written: ");
        } catch (e) {
          //console.error("Error adding document: ", e);
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
              {index === 0 ? (
                // Render the subform based on the userType chosen in the first step
                <div>{step.input}</div>
              ) : (
                // Render the subform based on the participant chosen in the previous step
                <div>
                  {
                    step.input.find((item) => item.participant === userType)
                      ?.subform
                  }
                </div>
              )}
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
                        userType === null)
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
