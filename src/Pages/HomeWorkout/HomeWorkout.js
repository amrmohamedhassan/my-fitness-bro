import React from 'react'
import './HomeWorkout.css'
import WorkoutDay from "../../components/Workout_Day/WorkoutDay"
import Days from "../../components/Workout_Day/Days.json"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const HomeWorkout = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });


  const [rank, setRank] = useState();
  useEffect(() => {
    authAxios
      .post("https://kenko.dhulfiqar.com/fitness/program", {
        id: 1,
      })
      .then((res) => {
        console.log(res.data.Days)
        setRank(res.data.Days);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className="homeWorkout">
      <div className="img--section-h"></div>
      <div className="cont">
        <div className="hWorkout--section">
          <div className="hWorkout--tittle"><h3>Home Workout</h3></div>
          <div className="hWorkout--p"><p>Daily workout routines for all your main muscle groups. In just a few minutes a day, you can build muscles and keep fitness at home without having to go to the gym. No equipment or coach needed, all exercises can be performed with just your body weight.</p></div>
          <div className="hWorkout--workouts">
            {rank &&
                rank.map((element) => {
                  return (
                    <div className="workouts">
                      <h3>Day {element.rank}</h3>
                      <div className="cards">
                        {element.workouts.map((sub) => {
                          return (
                            <div className="card">
                              <h3>{sub.exercise.title}</h3>
                              <Link to="/Exercise" state={{ id: sub.id }}>
                                <img
                                  src={
                                    "https://kenko.dhulfiqar.com" +
                                    sub.exercise.image
                                  }
                                  alt="workout"
                                  key={element.id}
                                />
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeWorkout