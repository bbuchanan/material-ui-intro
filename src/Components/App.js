import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { initialExercises, muscles } from "./store";
import { ExerciseContext } from "../context";

const app = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const [currentCategory, setCurrentCategory] = useState();
  const [currentExercise, setCurrentExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

  const getExercisesByMuscle = () => {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initExercises)
    );
  };

  const handleCategorySelected = category => setCurrentCategory(category);
  const handleExerciseSelected = id => {
    setCurrentExercise(exercises.find(x => x.id === id));
    setEditMode(false);
  };
  const handleExerciseCreate = exercise => setExercises(prevState => [...prevState, exercise]);

  const handleExerciseDelete = id => {
    const newExercises = exercises.filter(ex => ex.id !== id);
    setExercises(newExercises);
    setEditMode(currentExercise.id === id ? false : editMode);
    setCurrentExercise(currentExercise.id === id ? {} : currentExercise);
  };

  const handleExerciseSelectEdit = id => {
    setCurrentExercise(exercises.find(x => x.id === id));
    setEditMode(true);
  };

  const handleExerciseEdit = exercise => {
    const updatedExercises = [...exercises.filter(ex => ex.id !== exercise.id), exercise];
    setExercises(updatedExercises);
  };

  const getContext = () => ({
    muscles,
    exercisesByMuscles: getExercisesByMuscle(),
    category: currentCategory,
    exercise: currentExercise,
    onCreate: handleExerciseCreate,
    onCategorySelect: handleCategorySelected,
    onEdit: handleExerciseEdit,
    onSelectEdit: handleExerciseSelectEdit,
    onDelete: handleExerciseDelete,
    onSelect: handleExerciseSelected,
    editMode: editMode
  });

  return (
    <ExerciseContext.Provider value={getContext()}>
      <>
        <CssBaseline />
        <Header />
        <Exercises exercise={currentExercise} />
        <Footer />
      </>
    </ExerciseContext.Provider>
  );
};

export default app;
