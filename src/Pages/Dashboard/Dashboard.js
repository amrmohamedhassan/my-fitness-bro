import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
const Dashboard = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [userData, setUserData] = useState();
  const [userSurvey, setUserSurvey] = useState();
  const [workouts, setWorkouts] = useState();
  const [meals, setMeals] = useState();

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/trainer/survey", {
        jwt: localStorage.getItem("jwt"),
      })
      .then((res) => {
        setUserData(res.data.user);
        setUserSurvey(res.data.survey);
        setWorkouts(res.data.survey.programme.workouts);
        setMeals(res.data.survey.programme.meals);
      })
      .catch((res) => {
        console.log(res.data.response);
      });
  }, []);

  const Workout = () => {
    if (userSurvey.program_type === "HOME") {
      return (
        <h1 className="display-5">
          Home Workout (day {userSurvey.programme.rank})
        </h1>
      );
    } else if (userSurvey.program_type === "PPL") {
      return (
        <h1 className="display-5">
          Push Pull Leg (day {userSurvey.programme.rank})
        </h1>
      );
    } else if (userSurvey.program_type === "BSPLT") {
      return (
        <h1 className="display-5">
          Bro Split (day {userSurvey.programme.rank})
        </h1>
      );
    }
  };
  const Goal = () => {
    if (userData.goal === "MWL") {
      return <span className="green">Mild Weight Loss</span>;
    } else if (userData.goal === "WL") {
      return <span className="green">Weight Loss</span>;
    } else if (userData.goal === "EWL") {
      return <span className="green">Extreme Weight Loss</span>;
    } else if (userData.goal === "WG") {
      return <span className="green">Weight Gain</span>;
    } else if (userData.goal === "MWG") {
      return <span className="green">MildWeight Gain</span>;
    } else if (userData.goal === "EWG") {
      return <span className="green">Extreme Weight Gain</span>;
    }
  };

  if (!userData || !userSurvey) return null;

  return (
    <div className="Dashboard">
      <div className="user-card">
        <img src="../../Media/user.png" alt="user profile" />
        <div className="details">
          <ul className="personal">
            <li>
              <h1 className="display-6">
                {userData.first_name} {userData.last_name}
              </h1>
            </li>
            <li>
              <h1 className="display-6">{userData.age} Years old</h1>
            </li>
            <li>
              <h1 className="display-6">{userData.weight} Kg</h1>
            </li>
            <li>
              <h1 className="display-6">{userData.height} Cm</h1>
            </li>
          </ul>
          <ul className="other">
            <li>
              <h1 className="display-6">
                {" "}
                <span className="gray">BMR:</span>{" "}
                <span className="green">{userSurvey.daily_calories} Kcal</span>
              </h1>
            </li>
            <li>
              <h1 className="display-6">
                <span className="gray">BMI:</span>{" "}
                <span className="green">{userData.bmi}</span>
              </h1>
            </li>
            <li>
              <h1 className="display-6">
                <span className="gray">Goal: </span> {Goal()}
              </h1>
            </li>
            <li>
              <Link to="/Survey">
                <button className="survey--btn">Edit</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="macros">
        <h1 className="display-3">Daily Macors</h1>
        <div className="cards">
          <div className="card">
            <h1 className="display-5">Carbs</h1>
            <div className="status">
              <h1 className="display-6">{userSurvey.macros.Carbs_in_grams}</h1>
            </div>
          </div>
          <div className="card">
            <h1 className="display-5">Protiens</h1>
            <div className="status">
              <h1 className="display-6">
                {userSurvey.macros.Proteins_in_grams}
              </h1>
            </div>
          </div>
          <div className="card">
            <h1 className="display-5">Fats</h1>
            <div className="status">
              <h1 className="display-6">{userSurvey.macros.Fats_in_grams}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="workout">
        <h1 className="display-3">Daily Workout</h1>
        <section>
          {Workout()}
          <div className="cards">
            {workouts &&
              workouts.map((element) => {
                return (
                  <div className="card">
                    <h3>{element.workout.exercise.title}</h3>
                    <Link to="/Exercise" state={{ id: element.workout.id }}>
                      <img
                        src={
                          "https://kenko.dhulfiqar.com" +
                          element.workout.exercise.image
                        }
                        alt=""
                        key={element.workout.exercise.id}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
      <div className="meals">
        <h1 className="display-3">Recommended Meals</h1>
        <div className="cards">
          {meals &&
            meals.map((element) => {
              return (
                <div className="card">
                  <h3>{element.meal.title}</h3>
                  <Link to="/Meal" state={{ id: element.meal.id }}>
                    <img
                      src={"https://kenko.dhulfiqar.com" + element.meal.image}
                      alt=""
                      key={element.meal.id}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
