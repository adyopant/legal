import React from "react";
import { BottomNavigation } from "@material-ui/core";

import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div>
      <BottomNavigation>
        <Copyright />
      </BottomNavigation>
    </div>
  );
}
