import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Food from "../../components/SearchBar/food.json";
import "./Nutrition.css";
import FoodSugg from "../../components/FoodSugg/FoodSugg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const Nutrition = () => {
  
  const navigate = useNavigate();
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [meals, setMeals] = useState();

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/nutrition/meal")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  if (!meals) return null;
  return (
    <div className="nutrition">
      <div className="cont">
        <div className="nut--main--section">
          <div className="Searchbar">
            <SearchBar place="Food here!" data={Food} />
          </div>
          <div className="food--Sugg">
            <div className="food--sugg-ex"><FoodSugg /></div>
          </div>
          <div className="meals--section">
            <div className="meals--section--tittle">
              <h3>Meals</h3>
            </div>
            <div className="cards">
              {" "}
              {meals &&
                meals.map((element) => {
                  return (
                    <div className="card">
                        <h3>{element.title}</h3>
                      <Link to="/Meal" state={{id:element.id}}>
                        <img
                          src={"https://kenko.dhulfiqar.com" + element.image}
                          alt="meal"
                          key={element.id}
                        />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
