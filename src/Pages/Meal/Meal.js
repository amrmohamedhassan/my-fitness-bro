import React from 'react'
import './Meal.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
const Meal = () => {
    const location = useLocation();
    const authAxios = axios.create({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });

    const [meal, setMeal] = useState();

    useEffect(() => {
    authAxios
        .post("https://kenko.dhulfiqar.com/nutrition/meal" , {id:location.state.id})
        .then((res) => {
        setMeal(res.data);
        console.log(res.data);
        })
        .catch((res) => {
        console.log(res);
        });
    }, []);
    if (!meal) return null;
  return (
    <div className='Meal'>
        <div className="meal--details">
            <div className="meal--img">
                <img src={"https://kenko.dhulfiqar.com" + meal[0].image} alt="alo" />
            </div>
            <div className="meal--title">
                <h3>{meal[0].title}</h3>
            </div>
            <div className="meal--ing">
                <div className="ing--title">
                    <h3>Ingredients</h3>
                </div>
                
                    {meal &&
                        meal[0].ingredients.map((element) => {
                            return(
                                <div className="ing--details">
                                    <h5>{element.ingredient.title}</h5>
                                    <h6>{element.weight}g</h6>
                                </div>
                            )
                        })
                    }

            </div>
            <div className="meal--inst">
                <div className="inst--title">
                    <h3>Instructions</h3>
                </div>
                <p>{meal[0].instructions}</p>
            </div>
            <div className="macros--details">
                <div className="totalMacros--title">
                    <h3>Total Macros</h3>
                </div>
                <div className="total--macros">
                    <ul>
                        <li className='macros'>calories {meal[0].calories}</li>
                        <li className='macros'>Carb {meal[0].macros.CAR}g</li>
                        <li className='macros'>Fat {meal[0].macros.FAT}g</li>
                        <li className='macros'>Protien {meal[0].macros.PRO}g</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meal