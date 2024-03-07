import React, { useContext } from "react";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ProcessContextProvider } from "../../context/process.context";

export default function CaseInfoEdition() {
  const {
    setChallengeText,
    setSuccessCaseText,
    screen,
    challengeText,
    successCaseText,
    setTechnologieText,
    technologieText,
    improvementsText,
    setImprovementsText
  } = useContext(ProcessContextProvider);

  let value = '';
  if (screen === 'successCase') {
    value = successCaseText;
  }
  else if (screen === 'challenge') {
    value = challengeText;
  }
  else if (screen === 'improvement') {
    value = improvementsText;
  }
  else if (screen === 'technologies') {
    value = technologieText;
  }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="start"
      justifyContent="start"
    >
      <Box
        height={500}
        width={400}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={0}
        p={0}
      >
        <div>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(text) => {
              if (screen === 'successCase') {
                setSuccessCaseText(text);
              }
              else if (screen === 'challenge') {
                setChallengeText(text);
              }
              else if (screen === 'improvement') {
                setImprovementsText(text);
              }
              else if (screen === 'technologies') {
                setTechnologieText(text);
              }
            }}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              minWidth: "470px",
              maxWidth: "470px",
              minHeight: "551px",
            }}
          />
        </div>
      </Box>
    </Box>
  );
}
