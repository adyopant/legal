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
import ErrorMessage from "./ErrorMessage";

// Utils
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";
import { apiRequest, validateLoginForm } from "../utils/Helpers";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { error, showError } = useErrorHandler(null);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm(userEmail, userPassword, showError)) {
      authHandler();
    }
  };

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: userEmail, password: userPassword }
      );
      const { id, email } = userData;
    } catch (err) {
      setLoading(false);
      showError(err.message);
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
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
            block="true"
          >
            {loading ? "Loading..." : "Sign In"}
          </Button>
          <br />
          {error && <ErrorMessage errorMessage={error} />}
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
