import React from 'react'
import './WorkoutDay.css'
import WorkoutCard from './WorkoutCard'
import Card from './WorkoutCard.json'
const WorkoutDay = (props) => {
  const workoutCard = Card.map(card =>{
    return(
      <WorkoutCard card={card}/>
    )
  })
  return (
    <div className="workout_day">
      <div className="day--tittle">
        <h3>Day {props.day.day}</h3>
      </div>
      <div className="workout--cards">
        {workoutCard}
      </div>
    </div>
  )
}

export default WorkoutDay