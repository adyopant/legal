import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
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
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./RegisterStyles";

// xstate - core finite state machine
import { MachineContext } from "../state";

// Additional Components
import Copyright from "./Copyright";

// Utils

const SignIn = () => {
  const [machine, sendToMachine] = useContext(MachineContext);
  const [form, updateForm] = useState({
    username: undefined,
    password: undefined,
  });
  const { error } = machine.context;
  console.log(machine);
  const classes = useStyles();

  const handleUserChange = (e) => {
    updateForm({
      ...form,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    updateForm({
      ...form,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToMachine({ type: "LOGIN", data: { ...form } });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome to Legal Aid Clinc
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address | Username | Mobile"
            name="username"
            autoFocus
            value={form.username}
            onChange={handleUserChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            id="password"
            type="password"
            value={form.password}
            onChange={handlePasswordChange}
          />
          {machine.matches("auth.fail") && (
            <div>
              <p>{error.toString()}</p>
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {machine.matches("auth.success") && <Redirect to="/" />}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#/register" variant="body2">
                {"New to Legal Aid? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default SignIn;
