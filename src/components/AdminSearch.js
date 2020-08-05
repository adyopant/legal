import React, { useContext } from "react";
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
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { adminstyles } from "./muiStyles";

// Additional Components
import Copyright from "./Copyright";

// xstate - core finite state machine
import { MachineContext } from "../state";

const AdminSearch = (props) => {
  const [machine, sendToMachine] = useContext(MachineContext);
  const classes = adminstyles();
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome, {machine.context.name}
        </Typography>
        <Avatar className={classes.avatar}>
          <SearchOutlinedIcon />
        </Avatar>
        <Typography>
          Search below by Client ID or Case ID, or alternatively set up a new
          client!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Enter Client ID"
            name="clientId"
            autoFocus
            onChange={handleChange}
          />
          <Typography className={classes.text}>OR</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Case ID"
            name="caseId"
            onChange={handleChange}
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
              <Link href="#/register" variant="body2">
                {"Set up a new client"}
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
export default AdminSearch;
