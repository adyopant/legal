import React from "react";
import { BottomNavigation, Box } from "@material-ui/core";
import { footerStyles } from "./muiStyles";

import Copyright from "./Copyright";

export default function Footer() {
  const classes = footerStyles();
  return (
    <div>
      <BottomNavigation className={classes.footer}>
        <Box p={8}>
          <Copyright />
        </Box>
      </BottomNavigation>
    </div>
  );
}
