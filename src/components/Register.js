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
  Input,
  Fab,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { registerStyles } from "./muiStyles";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

// xstate - core finite state machine
import { MachineContext } from "../state";

// Additional Components
import Copyright from "./Copyright";

export default function Register() {
  const [machine, sendToMachine] = useContext(MachineContext);
  const [form, updateForm] = useState({
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    birthDate: undefined,
    city: undefined,
    country: undefined,
    pin: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
    file: undefined,
  });
  const classes = registerStyles();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });
  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ListItem key={id} onClick={handleSelect(suggestion)}>
          <ListItemText>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </ListItemText>
        </ListItem>
      );
    });
  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };
  const handleInputChange = (e) => {
    // Use event.persist to access the event properties in an asynchronous way
    e.persist();
    updateForm({
      ...form,
      file: e.target.files[0],
    });
  };

  // TODO: handle the data correctly
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToMachine({ type: "SIGNUP", data: { ...form } });
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome to Legal Aid Clinc
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          multiple
          onSubmit={handleSubmit}
        >
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="firstName"
                value={form.firstName}
                onChange={(e) => updateForm({ firstName: e.target.value })}
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
                onChange={(e) => updateForm({ middleName: e.target.value })}
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
                onChange={(e) => updateForm({ lastName: e.target.value })}
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
                onChange={(e) => updateForm({ birthDate: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <div ref={ref}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={value}
                  onChange={handleInput}
                  disabled={!ready}
                  placeholder="Please enter your city"
                />
                {/* We can use the "status" to decide whether we should display the dropdown or not */}
                {status === "OK" && <ul>{renderSuggestions()}</ul>}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Pin"
                value={form.pin}
                onChange={(e) => updateForm({ pin: e.target.value })}
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
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone"
                value={form.phone}
                onChange={(e) => updateForm({ phone: e.target.value })}
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
                onChange={(e) => updateForm({ password: e.target.value })}
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
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </Grid>
          </Grid>
          <Typography className={classes.title} component="h1">
            KYC Documents
          </Typography>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
              <label htmlFor="contained-button-file">
                <Input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  className={classes.input}
                  id="contained-button-file"
                />
                <Fab
                  size="large"
                  component="span"
                  aria-label="add"
                  variant="extended"
                  className={classes.fab}
                >
                  <AddIcon /> Aadhar Number
                </Fab>
              </label>
            </Grid>
            <br />
            <Grid item xs={12}>
              <label htmlFor="contained-button-file">
                <Input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  className={classes.input}
                  id="contained-button-file"
                />
                <Fab
                  className={classes.fab}
                  size="large"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Pan Number
                </Fab>
              </label>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="contained-button-file">
                <Input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  className={classes.input}
                  id="contained-button-file"
                />
                <Fab
                  className={classes.fab}
                  size="large"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Ration Card
                </Fab>
              </label>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="contained-button-file">
                <Input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  className={classes.input}
                  id="contained-button-file"
                />
                <Fab
                  className={classes.fab}
                  size="large"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Birth Certificate
                </Fab>
              </label>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="contained-button-file">
                <Input
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                  className={classes.input}
                  id="contained-button-file"
                />
                <Fab
                  className={classes.fab}
                  size="large"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Other
                </Fab>
              </label>
            </Grid>
          </Grid>
          <FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I Authorise (Declaration)"
            />
            <Typography component="h5" className={classes.typography}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
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
