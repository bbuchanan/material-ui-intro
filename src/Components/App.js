import React, { useState } from "react";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { initialExercises, muscles } from "./store";

const app = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const [currentCategory, setCurrentCategory] = useState();
  const [currentExercise, setCurrentExercise] = useState({});

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

  const handleCategorySelected = category => {
    setCurrentCategory(category);
  };

  const handleExerciseSelected = id => {
    setCurrentExercise(exercises.find(x => x.id === id));
  };

  const handleExerciseCreate = exercise => {
    setExercises(prevState => [...prevState, exercise]);
  };

  const handleExerciseDelete = id => {
    const newExercises = exercises.filter(ex => ex.id !== id);
    setExercises(newExercises);
  };

  return (
    <>
      <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
      <Exercises
        category={currentCategory}
        exercise={currentExercise}
        exercises={getExercisesByMuscle()}
        onSelect={handleExerciseSelected}
        onDelete={handleExerciseDelete}
      />
      <Footer category={currentCategory} onSelect={handleCategorySelected} muscles={muscles} />
    </>
  );
};

export default app;
