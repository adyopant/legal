import React, { useState, useContext } from "react";
// MUI Styles
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  FormControl,
  Checkbox,
  TextareaAutosize,
  Select,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { registerStyles } from "./muiStyles";

// xstate - core finite state machine
import { MachineContext } from "../state";

// Additional Components
import Copyright from "./Copyright";

// Utils
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";
import { validateLoginForm } from "../utils/Helpers";

export default function Register() {
  const [machine, sendToMachine] = useContext(MachineContext);
  const [form, updateForm] = useState({
    username: undefined,
    password: undefined,
  });
  const { error, showError } = useErrorHandler(null);
  const classes = registerStyles();

  const handleInputChange = (e) => {
    // Use event.persist to access the event properties in an asynchronous way
    e.persist();
    updateForm({
      ...form,
      username: e.target.value,
    });
  };

  // TODO: handle the data correctly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm(form.username, form.password, showError)) {
      sendToMachine({ type: "LOGIN", data: { ...form } });
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.green}>
          <AssignmentIcon />
        </Avatar>
        <Typography 
          component="h1"
          variant="h5"
          align="left">
          Case Profile
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={12} className={classes.grid}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="casetitle"
                label="Case Title"
                name="casetitle"
                autoFocus
                value={form.casetitle}
                style={{ width: 800 }}
                //onChange={handleCaseTitle}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={4}
                placeholder="Enter your Case details Here "
                style={{ width: 800 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={4}
                placeholder="Enter your Notes details Here "
                style={{ width: 800 }}
              />
            </Grid>
            <Grid item sm={4}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
