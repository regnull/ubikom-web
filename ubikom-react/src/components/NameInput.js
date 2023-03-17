import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Grid from "@mui/material/Grid"

const defaultButtonLabel = "Proceed";

function validateName(name) {
  if (name.length < 3) {
    return "name is too short";
  }
  if (!/^[a-zA-Z0-9_][a-zA-Z0-9_\-]*$/.test(name)) {
    return "invalid name";
  }
  return null;
}

export default function NameInput({
  registryContract,
  width,
  spacing,
  marginTop,
  buttonLabel,
  initialValue,
}) {
  const [name, setName] = useState(initialValue ? initialValue : "");
  const [callError, setCallError] = useState(null);
  const [callSuccess, setCallSuccess] = useState(false);
  const [owner, setOwner] = useState(null);

  if (!buttonLabel) {
    buttonLabel = defaultButtonLabel;
  }

  let helperText = name.length > 0 ? validateName(name) : null;
  let error = helperText != null;

  if (callSuccess) {
    if (owner) {
      error = true;
      helperText = "taken";
    }
  } else {
    error = true;
    helperText = callError;
  }

  const nextEnabled = !error && name.length > 0;

  const onNameChange = (event) => {
    setName(event.target.value);
    registryContract.methods
      .lookupName(event.target.value)
      .call(function (err, res) {
        if (err) {
          setOwner(null);
          setCallSuccess(false);
          setCallError(err);
          return;
        }
        setCallSuccess(true);
        setCallError(null);
        if (res.owner === "0x0000000000000000000000000000000000000000") {
          setOwner(null);
        } else {
          setOwner(res.owner);
        }
      });
  };

  return (
    <>
      <Grid container>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          error={error}
          helperText={helperText}
          onChange={onNameChange}
          sx = {{ verticalAlign: "middle" }}
        />
        </Grid>
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
        <Button variant="contained" disabled={!nextEnabled} sx={{ marginLeft: "20px", verticalAlign: "middle" }}>
          {buttonLabel}
        </Button>
        </Grid>
        </Grid>
      {/* </Stack> */}
    </>
  );
}
