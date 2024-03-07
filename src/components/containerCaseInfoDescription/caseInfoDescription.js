import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function createMarkup(text) {
  return {__html: text};
}

export default function FixedContainer({ title, textTest }) {
  return (
    <>
      <h1 style={{ margin: "0 0 10px" }}>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup(textTest)} />
    </>
  );
}
