import './FoodSugg.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';

const FoodSugg = () => {
  const location = useLocation();
  const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    const [meals, setMeals] = useState();

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/trainer/survey", {
        jwt: localStorage.getItem("jwt"),
      })
      .then((res) => {
        setMeals(res.data.survey.programme.meals);
      })
      .catch((res) => {
        console.log(res.data.response);
      });
  }, []);
  if (!meals) return null;
    return (
      <div>
        <div className="food--sugg--tittle">
                <h3>Recommended</h3>
        </div>
        {meals &&
            meals.map((element) => {
              return (
                <Link to="/Meal" state={{ id: element.meal.id }}>
                  <div className="foodSugg">
                      <div className="name--macros">
                          <div className="food--name">
                              <h3>{element.meal.title}</h3>
                          </div>
                          <div className="food--macros">
                              <h4>Carbs:{element.meal.macros.CAR} g</h4>
                              <h4>Fats:{element.meal.macros.FAT} g</h4>
                              <h4>Protein:{element.meal.macros.PRO} g</h4>
                          </div>
                      </div>
                      <div className="cal"><h1>{element.meal.calories}</h1></div>
                  </div>
                  </Link>
              );
            })}
      </div>
    );
  };
  
  export default FoodSugg;