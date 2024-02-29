import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';


export default function CaseInfoEdition() {
const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        height={500}
        width={400}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={0}
        p={2}
        
      >
        <div>
        <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
        />
        </div>
      </Box>
    </Box>
  );
} 