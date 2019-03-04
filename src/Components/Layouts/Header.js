import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flex: {
    flex: 1
  }
};
const header = ({ classes, muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h2" variant="h5" color="inherit" className={classes.flex}>
          Exercise Database
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(header);
