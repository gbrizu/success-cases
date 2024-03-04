import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function CaseInfoEdition() {
  const [convertedText, setConvertedText] = useState("Some default content");

  // Estilo personalizado para el borde del editor de texto
  const quillStyle = {
    border: "2px solid black", // Cambia el color del borde a gris oscuro
    borderRadius: "5px",
    minWidth: "470px", // Limita la anchura del editor
    maxWidth: "470px", // Limita la anchura del editor
    minHeight: "551px",
  };
  console.log(convertedText);
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
            onChange={setConvertedText}
            style={quillStyle} // Aplica el estilo personalizado al editor de texto
          />
        </div>
      </Box>
    </Box>
  );
}
