import React from "react";
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
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import machineConfig from "../utils/machineConfig";
import initMachineOptions from "../utils/initMachineOptions";

// Additional Components
import Copyright from "./Copyright";
import ErrorMessage from "./ErrorMessage";

// Utils

const SignIn = () => {
  const machineOptions = initMachineOptions();
  const signInMachine = Machine(machineConfig, machineOptions);
  const [current, send] = useMachine(signInMachine);

  const classes = useStyles();

  const handleEmailChange = (e) => {
    send({
      type: "INPUT_EMAIL",
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    send({
      type: "INPUT_PASSWORD",
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send({ type: "SUBMIT" });
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
            value={current.context.email}
            onChange={handleEmailChange}
          />
          {current.matches("ready.email.error") ? (
            <ErrorMessage>
              {current.matches("ready.email.error.empty") &&
                "please enter your email"}
              {current.matches("ready.email.error.badFormat") &&
                "email format doesn't look right"}
              {current.matches("ready.email.error.noAccount") &&
                "no account linked with this email"}
            </ErrorMessage>
          ) : (
            <div />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            value={current.context.password}
            disabled={current.matches("waitingResponse")}
            onChange={handlePasswordChange}
          />
          {current.matches("ready.password.error") ? (
            <ErrorMessage>
              {current.matches("ready.password.error.empty") &&
                "please enter your password"}
              {current.matches("ready.password.error.tooShort") &&
                "password should be at least 5 characters"}
              {current.matches("ready.password.error.incorrect") &&
                "incorrect password"}
            </ErrorMessage>
          ) : (
            <div />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            isLoading={current.matches("waitingResponse")}
          >
            Sign In
          </Button>
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
