import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const defaultButtonLabel = "Proceed";

function validateName(name) {
    if (name.length < 3) {
        return "name is too short"
    }
    if (! /^[a-zA-Z0-9_][a-zA-Z0-9_\-]*$/.test(name)) {
        return "invalid name"
    }
    return null
}

export default function NameInput({
  width,
  spacing,
  marginTop,
  buttonLabel,
  initialValue,
}) {
  const [name, setName] = useState(initialValue ? initialValue : "");

  if (!buttonLabel) {
    buttonLabel = defaultButtonLabel;
  }

  const helperText = name.length > 0 ? validateName(name) : null
  const error = helperText != null

  return (
    <>
      <Stack
        spacing={spacing}
        direction="row"
        width={width}
        marginTop={marginTop}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          error={error}
          helperText={helperText}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button variant="contained">{buttonLabel}</Button>
      </Stack>
    </>
  );
}
