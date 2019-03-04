import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import FormControl from "./Form";

import { Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core";

const styles = theme => ({
  paper: {
    overflowY: "auto",
    padding: 20,
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
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
  <Grid container className={classes.container}>
    <Grid className={classes.item} item xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography color="secondary" variant="h5" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(exercise => (
                  <ListItem key={exercise.id} button onClick={() => onSelect(exercise.id)}>
                    <ListItemText primary={exercise.title} />
                    <ListItemSecondaryAction>
                      <IconButton color="primary" onClick={() => onSelectEdit(exercise.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="primary" onClick={() => onDelete(exercise.id)}>
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
    <Grid className={classes.item} item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography color="secondary" gutterBottom variant="h5" style={{ textTransform: "capitalize" }}>
          {title}
        </Typography>
        {editMode ? (
          <FormControl key={id} exercise={exercise} muscles={muscles} onSubmit={onEdit} />
        ) : (
          <Typography variant="subtitle1">{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(index);
