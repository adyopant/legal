import React from "react";
import { Typography, Box, Container, Grid, Button } from "@material-ui/core";
import { homeStyles } from "./muiStyles";

import Footer from "./Footer";

export default function Home() {
  const classes = homeStyles();

  return (
    <div>
      <Box className={classes.image}>
        <Container>
          <Box>
            <Typography className={classes.heading} variant="h1">
              WELCOME TO LEGAL AID CLINIC
            </Typography>
            <Box className={classes.button}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#/sign-in"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box padding={6} m={3}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={6} className={classes.icon}>
            <img
              alt="Gavel Icon"
              src="https://img.icons8.com/nolan/96/law.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.text}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={6} className={classes.text}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.icon}>
              <img
                alt="Scales"
                src="https://img.icons8.com/nolan/96/scales.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
