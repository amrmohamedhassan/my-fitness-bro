import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Workout from "./Pages/Workout/Workout";
import Nutrition from "./Pages/Nutrition/Nutrition";
import Error from "./Pages/Error/Error";
import Slider from "./components/Slider/Slider";
import Push from "./Pages/Push/Push";
import BroSplit from "./Pages/BroSplit/BroSplit";
import HomeWorkout from "./Pages/HomeWorkout/HomeWorkout";
import Login from "./Pages/Login/Login";
import Sign from "./Pages/Sign/Sign";
import Meal from "./Pages/Meal/Meal";
import Survey from "./Pages/Survey/Survey";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Loading from "./Pages/Loading/Loading";
import Exercise from "./Pages/Exercise/Exercise";
import Footer from "./components/Footer/Footer";
function App() {
  window.token = window.localStorage.getItem("jwt");
  console.log(window.token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Navbar />, <Home />, <Footer />]} />
        <Route path="/Workout" element={[<Navbar />, <Slider />, <Workout />, <Footer />]} />
        <Route path="/Nutrition" element={[<Navbar />, <Nutrition />, <Footer />]} />
        <Route path="/Meal" element={[<Navbar />, <Meal />, <Footer />]} />
        <Route path="/Push" element={[<Navbar />, <Push />, <Footer />]} />
        <Route path="/BroSplit" element={[<Navbar />, <BroSplit />, <Footer />]} />
        <Route path="/HomeWorkout" element={[<Navbar />, <HomeWorkout />, <Footer />]} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Dashboard" element={[<Navbar />, <Dashboard />, <Footer />]} />
        <Route path="*" element={<Error />} />
        <Route path="/Loading" element={<Loading />} />
        <Route path="/Exercise" element={[<Navbar />, <Exercise />, <Footer />]} />
      </Routes>
    </Router>
  );
}

export default App;
