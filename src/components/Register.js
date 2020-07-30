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
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for Legal Aid Clinic
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="firstName"
                value={form.firstName}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="middleName"
                label="Middle Name"
                name="middleName"
                value={form.middleName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={form.LastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="date"
                label="Date of Birth"
                type="date"
                defaultValue="2020-01-01"
                value={form.birthDate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="City"
                value={form.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Country"
                value={form.country}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Pin"
                value={form.pin}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone or pp"
                value={form.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="ConfirmPassword"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Typography className={classes.title} component="h1">
            KYC Documents
          </Typography>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
              <TextField label="Aadhar Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Pan Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Ration Card" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Birth Certificate" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Any Other" />
            </Grid>
          </Grid>
          <FormControl>
            <FormControlLabel
              fullWidth
              control={<Checkbox value="remember" color="primary" />}
              label="I Authorise (Declaration)"
            />
            <Typography component="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </FormControl>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
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
