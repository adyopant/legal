import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
// MUI Styles
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { useStyles } from "./RegisterStyles";

// xstate - core finite state machine
// import { MachineContext } from "../state";

// Additional Components
import Copyright from "./Copyright";

// Utils

const OfficeSignIn = () => {
  const classes = useStyles();

  // const Button = () => (
  //   <Route
  //     render={() => (
  //       <Redirect
  //         to={{
  //           pathname: "/officer-signin",
  //         }}
  //       />
  //     )}
  //   />
  // );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome Officer Name
        </Typography>
        <Typography component="h1" variant="h5">
          Please enter your details
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Client ID | Email | Mobile"
            name="username"
            autoFocus
          />
          <p>OR</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Case ID"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
          <Grid container>
            <Grid item>
              <Button onChange={Button}>Setup a New Client</Button>
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
export default OfficeSignIn;
