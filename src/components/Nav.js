import React from "react";

// MUI Style
import { navStyles } from "./RegisterStyles";
import { Box, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

export default function ButtonAppBar() {
  const classes = navStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
            <img
              alt="Gavel icon"
              src="https://img.icons8.com/nolan/64/law.png"
            />
          </IconButton>
          <Box className={classes.buttonGroup}>
            <Button
              color="inherit"
              variant="outlined"
              href="#/sign-in"
              className={classes.button}
            >
              Sign In
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              href="#/register"
              className={classes.button}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
