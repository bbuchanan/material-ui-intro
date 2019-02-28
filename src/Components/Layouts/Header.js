import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h2" variant="headline" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default header;
