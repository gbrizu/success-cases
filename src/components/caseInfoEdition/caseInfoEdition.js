import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';

export default function CaseInfoEdition() {

const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
    
  );
  }

/* let textTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Amet venenatis urna cursus eget nunc. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.';


export default function FixedContainer() {
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
        sx={{ border: '2px solid grey' }}
      >
        <h1 style={{ margin: '0 0 10px'}}>Success Case</h1>
        <div>
          <p style={{ margin: '5' }}>{textTest}</p>
        </div>
      </Box>
    </Box>
  );
} */