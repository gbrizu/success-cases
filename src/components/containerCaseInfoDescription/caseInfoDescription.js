import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export default function FixedContainer({ title, textTest }) {
  return (
    <>
      <h1 style={{ margin: "0 0 10px" }}>{title}</h1>
      <p style={{ margin: "0" }}>{textTest}</p>
    </>
  );
}
