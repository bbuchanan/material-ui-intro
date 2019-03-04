import React, { useState, useEffect } from "react";
import { Button, TextField, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

const formControl = ({ muscles: categories, exercise, onSubmit }) => {
  const [exerciseState, setExerciseState] = useState({ title: "", description: "", muscles: "" });

  useEffect(
    () => {
      setExerciseState(
        exercise
          ? exercise
          : {
              title: "",
              description: "",
              muscles: ""
            }
      );
    },
    [exercise]
  );

  const handleChange = name => event => {
    const { value } = event.target;
    setExerciseState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // TODO: validate
    const exercise = { id: exerciseState.title.toLowerCase().replace(/ /g, "-"), ...exerciseState };
    onSubmit(exercise);
  };

  return (
    <>
      <TextField value={exerciseState.title} label="Title" onChange={handleChange("title")} margin="normal" fullWidth />
      <br />
      <FormControl fullWidth>
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
        multiline
        rows="4"
        label="Description"
        onChange={handleChange("description")}
        value={exerciseState.description}
        margin="normal"
        fullWidth
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        disabled={!exerciseState.title || !exerciseState.muscles}
      >
        {exercise ? "Edit" : "Create"}
      </Button>
    </>
  );
};

export default formControl;
