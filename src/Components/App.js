import React, { useState } from "react";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { initialExercises, muscles } from "./store";

const app = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const [currentCategory, setCurrentCategory] = useState();
  const [currentExercise, setCurrentExercise] = useState({});

  const getExercisesByMuscle = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

        return exercises;
      }, {})
    );
  };

  const handleCategorySelected = category => {
    setCurrentCategory(category);
  };

  const handleExerciseSelected = id => {
    setCurrentExercise(exercises.find(x => x.id === id));
  };

  return (
    <>
      <Header />
      <Exercises
        category={currentCategory}
        exercise={currentExercise}
        exercises={getExercisesByMuscle()}
        onSelect={handleExerciseSelected}
      />
      <Footer category={currentCategory} onSelect={handleCategorySelected} muscles={muscles} />
    </>
  );
};

export default app;
