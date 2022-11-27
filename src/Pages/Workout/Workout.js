import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import './workout.css';
const Workout = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/fitness/program")
      .then((res) => {
        console.log(res.data[0])
        // setWorkouts(res.data.meals);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className="workoutt">
      <div className="cont">
        <div className="workout--var">
          <Link to="/Push">
            <div className="workout--type1">
              <h1 className="workout--name" id="var1">Push Pull Leg</h1>
            </div>
          </Link>
          <Link to="/BroSplit">
            <div className="workout--type2">
              <h1 className="workout--name" id="var2">Bro Split</h1>
            </div>
          </Link>
          <Link to="/HomeWorkout">
            <div className="workout--type3">
              <h1 className="workout--name" id="var3">Home<br/>Workout</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Workout