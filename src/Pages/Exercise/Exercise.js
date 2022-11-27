import React from "react";
import "./Exercise.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Exercise = () => {
  const location = useLocation();
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [workout, setWorkout] = useState();

  useEffect(() => {
    authAxios
      .post("https://kenko.dhulfiqar.com/fitness/workout", {
        id: location.state.id,
      })
      .then((res) => {
        console.log(res);
        setWorkout(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  if (!workout) {
    return null;
  }
  return (
    <div className="Exercise">
      <div className="exercise--details">
        <div className="exercise--img">
          <img
            src={"https://kenko.dhulfiqar.com" + workout.exercise.image}
            alt="exercise"
          />
        </div>
        <div className="exercise--title">
          <h3>{workout.exercise.title}</h3>
        </div>
        <div className="exercise--sets">
            <h3>Sets: {workout.sets} sets</h3>
        </div>
        <div className="exercise--reps">
          <h3>Reps: {workout.reps} reps</h3>
        </div>
        <div className="exercise--Inst">
          <h3>Instructions</h3>
          <p> {workout.exercise.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
