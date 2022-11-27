// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const authAxios = axios.create({
//     headers: {
//         Authorization: Bearer ${localStorage.getItem("jwt")},
//         },
//     });
//   const [workouts, setWorkouts] = useState();

//   useEffect(() => {
//     authAxios
//       .get("https://kenko.dhulfiqar.com/trainer/survey", {
//         jwt: localStorage.getItem("jwt"),
//       })
//       .then((res) => {
//         setWorkouts(res.data.survey.programme.workouts);
//       })
//       .catch((res) => {
//         console.log(res);
//       });
//   }, []);
//   console.log(workouts);

//   return (
//     <div className="App">
//       <div className="image">
//         <h1>Image</h1>
//         {workouts &&
//           workouts.map((element) => {
//             return (
//               <img
//                 src={
//                   "https://kenko.dhulfiqar.com" + element.workout.exercise.image
//                 }
//                 alt=""
//                 key={element.workout.exercise.id}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default App;