import React from 'react'
import './WorkoutDay.css'
const WorkoutCard = (props) => {
  return (
    <div className="workoutvr">
          {props.card.card}
    </div>
  )
}

export default WorkoutCard