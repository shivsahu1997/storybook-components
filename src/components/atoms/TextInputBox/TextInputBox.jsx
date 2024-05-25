import React from "react";
import TextField from "@mui/material/TextField";

const TextInputBox = ({ label, ...rest }) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      sx={{ width: "30ch" }}
      {...rest}
    />
  );
};

export default TextInputBox;
