import React from "react";
import "./BroSplit.css";
import WorkoutDay from "../../components/Workout_Day/WorkoutDay";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BroSplit = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [rank, setRank] = useState();
  useEffect(() => {
    authAxios
      .post("https://kenko.dhulfiqar.com/fitness/program", {
        id: 3,
      })
      .then((res) => {
        console.log(res.data.Days);
        setRank(res.data.Days);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="broSplit">
      <div className="img--section"></div>
      <div className="cont">
        <div className="split--section">
          <div className="split--tittle">
            <h3>Bro Split</h3>
          </div>
          <div className="split--p">
            <p>The idea behind this is that you get to target each muscle group once a week and get a lot of volumes in because you then have a full week to recover before you train again.</p>
          </div>
          <div className="split--workouts">
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
  );
};

export default BroSplit;
