import React, { useState } from "react";
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

// Additional Components
import Copyright from "./Copyright";

// Utils
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";
import { apiRequest, validateLoginForm } from "../utils/Helpers";

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = React.useState(false);
  const { error, showError } = useErrorHandler(null);

  const classes = useStyles();

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: inputs.email, password: inputs.password }
      );
      const { id, email } = userData;
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    // Use event.persist to access the event properties in an asynchronous way
    e.preventDefault();
    if (validateLoginForm(inputs.email, inputs.password, showError)) {
      authHandler();
    }
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
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address | Username | Mobile"
            name="username"
            autoFocus
            value={inputs.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="Yes"
            onChange={handleInputChange}
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
}
