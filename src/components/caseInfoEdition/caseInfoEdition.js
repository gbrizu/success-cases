import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { ProcessContextProvider } from "../../context/process.context";

// En CaseInfoEdition.js
export default function CaseInfoEdition({ initValue }) {
  const { setChallengeText, setSuccessCaseText, screen, successCase, challengeText, successCaseText } = useContext(ProcessContextProvider);

  const value = screen === 'challenge' ? challengeText : successCaseText;

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
            value={value} // Usa `initValue` directamente
            onChange={(text) => {
              if (screen === 'successCase') {
                setSuccessCaseText(text)
              }
              else if (screen === 'challenge') {
                setChallengeText(text)
              } 
              // else if (screen === 'improvements') {
              //   if (successCase.improvements && successCase.improvements[0]) {
              //     successCase.improvements[0].text = text;
              //   }
              // } else if (screen === 'technologie') {
              //   if (successCase.technologie && successCase.technologie[0]) {
              //     successCase.technologie[0].text = text;
              //   }
              // }
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
