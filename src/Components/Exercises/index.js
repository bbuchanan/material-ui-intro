import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography, List, ListItem, ListItemText, ListItemLink } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overFlowY: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => (
          <>
            <Typography variant="headline" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(exercise => (
                <ListItem button>
                  <ListItemText primary={exercise.title} />
                </ListItem>
              ))}
            </List>
          </>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography style={{ marginTop: 20 }} variant="subheading">
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
