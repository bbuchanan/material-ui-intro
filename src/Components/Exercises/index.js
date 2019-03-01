import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";

import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";

const styles = {
  Paper: {
    overflowY: "auto",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500
  }
};

export default ({
  exercises,
  category,
  onSelect,
  onDelete,
  exercise: { id, title = "Welcome!", description = "Please select an exercise from the list on the left." }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="headline" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(exercise => (
                  <ListItem key={exercise.id} button onClick={() => onSelect(exercise.id)}>
                    <ListItemText primary={exercise.title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onDelete(exercise.id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="headline" style={{ textTransform: "capitalize" }}>
          {title}
        </Typography>
        <Typography style={{ marginTop: 20 }} variant="subheading">
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
