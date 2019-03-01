import React, { useState } from "react";

import { Dialog, Button, TextField, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

import { Add } from "@material-ui/icons";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

const createDialog = ({ muscles: categories, classes, onCreate }) => {
  const [open, setOpen] = useState(false);
  const [exerciseState, setExerciseState] = useState({ title: "", description: "", muscles: "" });

  const handleChange = name => event => {
    const { value } = event.target;
    setExerciseState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // TODO: validate
    const exercise = { ...exerciseState, id: exerciseState.title.toLowerCase().replace(/ /g, "-") };
    onCreate(exercise);
    setExerciseState({ title: "", description: "", muscles: "" });
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" mini onClick={handleToggle}>
        <Add />
      </Button>
      <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <TextField label="Title" className={classes.FormControl} onChange={handleChange("title")} margin="normal" />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={exerciseState.muscles} onChange={handleChange("muscles")}>
              {categories.map(m => (
                <MenuItem id={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            className={classes.FormControl}
            multiline
            rows="4"
            label="Description"
            onChange={handleChange("description")}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="raised" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(createDialog);
