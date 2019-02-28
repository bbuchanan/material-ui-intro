import React, { useState } from "react";

import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { initialExercises, muscles } from "./store";

const app = () => {
  const [exercises, setExercises] = useState(initialExercises);

  const getExercisesByMuscle = () => {
    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

        return exercises;
      }, {})
    );
  };

  return (
    <>
      <Header />
      <Exercises exercises={getExercisesByMuscle()} />
      <Footer muscles={muscles} />
    </>
  );
};

export default app;
