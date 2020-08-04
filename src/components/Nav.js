import React from "react";

// MUI Style
import { navStyles } from "./muiStyles";
import { Box, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

export default function ButtonAppBar({ machine }) {
  const { user } = machine.context;
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
          {user === undefined && (
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
          )}
          {user !== undefined && (
            <Box className={classes.buttonGroup}>
              <IconButton
                color="inherit"
                variant="outlined"
                href="#/admin"
                fontSize="large"
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
