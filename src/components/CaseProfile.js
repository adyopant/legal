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
  makeStyles
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function CaseProfile() {
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
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
              <Avatar className={classes.green} >
                <AssignmentIcon />
              </Avatar>
              </Grid>
              <Grid item xs={6}>
              <Typography component="h2" variant="h5" align="left" >Case ID: CI000000001</Typography>
            </Grid>
              <Grid item xs={6}>              
              <Typography component="h2" variant="h4" align="left">
                Case Profile
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h2" variant="h5" align="left">Client ID: ID000000001</Typography>
            </Grid>
            <Grid item xl={4 }>
            <Typography component="h2" variant="h5" align="left">Next Action: Assign</Typography>
            </Grid>
            <Grid item xl={4}>
            <Typography component="h2" variant="h5" align="left">Action Owner: Ram</Typography>              
            </Grid>
            <Grid item xl={4}>
            <Typography component="h2" variant="h5" align="right">Deadline: 24/10/2020</Typography>
            </Grid>

            <Grid item xl={12}>
            
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
                style={{ width: 750 }}              
                //onChange={handleCaseTitle}
              />
            </Grid>
            <Grid item xl={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={4}
                placeholder="Enter your Case details Here "
                style={{ width: 750 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={4}
                placeholder="Enter your Notes details Here "
                style={{ width: 750 }}
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
