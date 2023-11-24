import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export const MentorExpertSkills = ({ onHandleEBasicSkills }) => {
  const [softskills, setSoftSkills] = React.useState(["", ""]); // Initialize with two empty strings
  const [industryskills, setIndustrySkills] = React.useState(["", ""]); // Initialize with two empty strings

  const handleSoftSkillChange = (index, value) => {
    setSoftSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = value;
      return newSkills;
    });
  };

  const handleIndustrySkillChange = (index, value) => {
    setIndustrySkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = value;
      return newSkills;
    });
  };

  useEffect(() => {
    onHandleEBasicSkills({ softskills, industryskills });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [softskills, industryskills]);
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
              onChange={(e) => handleSoftSkillChange(0, e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              label="Expert Soft Skill"
              variant="outlined"
              onChange={(e) => handleSoftSkillChange(1, e.target.value)}
            />
          </div>
          <div>
            <h2> Two (2) Industry Skills</h2>
            <TextField
              required
              id="outlined-basic"
              label="Expert Industry Skill"
              variant="outlined"
              onChange={(e) => handleIndustrySkillChange(0, e.target.value)}
            />
            <TextField
              required
              id="outlined-basic"
              label="Expert Industry Skill"
              variant="outlined"
              onChange={(e) => handleIndustrySkillChange(0, e.target.value)}
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};
