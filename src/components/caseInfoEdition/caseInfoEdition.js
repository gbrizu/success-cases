import React, { useContext, useEffect } from 'react'
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { ProcessContextProvider } from '../../context/process.context';

export default function CaseInfoEdition({ screen, initValue }) {
  const { onChangeTextInput } = useContext(
    ProcessContextProvider
  );

  
  const [convertedText, setConvertedText] = useState(initValue ? initValue : "Some default content");

  // Estilo personalizado para el borde del editor de texto
  const quillStyle = {
    border: "2px solid black", // Cambia el color del borde a gris oscuro
    borderRadius: "5px",
    minWidth: "470px", // Limita la anchura del editor
    maxWidth: "470px", // Limita la anchura del editor
    minHeight: "551px",
  };

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
            value={convertedText}
            onChange={(text) => {
              setConvertedText(text);
              onChangeTextInput(text, screen);
            }}
            style={quillStyle} // Aplica el estilo personalizado al editor de texto
          />
        </div>
      </Box>
    </Box>
  );
}
