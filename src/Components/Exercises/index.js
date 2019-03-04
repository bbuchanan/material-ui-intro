import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "./Form";

import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";

const styles = theme => ({
  Paper: {
    overflowY: "auto",
    padding: 20,
    marginTop: 5,
    height: 500
  }
});

const index = ({
  classes,
  exercises,
  muscles,
  category,
  editMode,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit,
  exercise,
  exercise: { id, title = "Welcome!", description = "Please select an exercise from the list on the left." }
}) => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
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
                      <IconButton onClick={() => onSelectEdit(exercise.id)}>
                        <Edit />
                      </IconButton>
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
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {editMode ? (
          <FormControl exercise={exercise} muscles={muscles} onSubmit={onEdit} />
        ) : (
          <>
            <Typography variant="headline" style={{ textTransform: "capitalize" }}>
              {title}
            </Typography>
            <Typography style={{ marginTop: 20 }} variant="subheading">
              {description}
            </Typography>
          </>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(index);
