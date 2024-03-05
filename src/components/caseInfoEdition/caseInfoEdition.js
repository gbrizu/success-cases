import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { ProcessContextProvider } from "../../context/process.context";

// En CaseInfoEdition.js
export default function CaseInfoEdition({ screen, initValue, setText }) {
  const { onChangeTextInput } = useContext(ProcessContextProvider);

  // Utiliza directamente `initValue` sin mantener un estado interno para `convertedText`
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
            value={initValue} // Usa `initValue` directamente
            onChange={(text) => {
              setText(text); // Actualiza el texto en el componente padre
              onChangeTextInput(text, screen); // Actualiza el contexto
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
