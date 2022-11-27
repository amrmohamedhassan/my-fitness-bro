import React from 'react'
import './Push.css'
import WorkoutDay from "../../components/Workout_Day/WorkoutDay"
import Days from "../../components/Workout_Day/Days.json"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const Push = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });


  const [rank, setRank] = useState();
  useEffect(() => {
    authAxios
      .post("https://kenko.dhulfiqar.com/fitness/program", {
        id: 2,
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
    <div className="push">
      <div className="img--section--p"></div>
      <div className="cont">
        <div className="push--section">
          <div className="push--tittle"><h3>Push Pull Leg</h3></div>
          <div className="push--p"><p>Push workouts train the chest, shoulders, and triceps, while Pull workouts train the back, biceps, and forearms. A day for training the lower body and core is also included in this training split.</p></div>
          <div className="push--workouts">
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

export default Push