import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Survey.css";
import axios from "axios";
const Survey = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/trainer/survey", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        // navigate("/Dashboard");
      })
      .catch((res) => {
        console.log(res);
        navigate("/Survey");
      });
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    activity: "",
    goal: "",
    weight: "",
    height: "",
    program_type: "",
    jwt: localStorage.getItem("jwt"),
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    authAxios
      .post("https://kenko.dhulfiqar.com/trainer/survey", {
        jwt: formData.jwt,
        activity: formData.activity,
        goal: formData.goal,
        weight: formData.weight,
        height: formData.height,
        program_type: formData.program_type,
      })
      .then((res) => {
        console.log(res);
        navigate("/Dashboard");
      })
      .catch((res) => {
        console.log(res.response.data.detail);
      });
  }
  return (
    <div className="form--backGround">
      <form className="form--sign" onSubmit={handleSubmit}>
        <Link to="/">
          <img src="../../media/Logo.svg" alt="Logo" />
        </Link>
        <input
          type="text"
          placeholder="Weight"
          className="sign--input"
          name="weight"
          required
          onChange={handleChange}
          value={formData.weight}
        />
        <input
          type="text"
          placeholder="Height"
          className="sign--input"
          name="height"
          required
          onChange={handleChange}
          value={formData.height}
        />
        <select
          id="activity"
          className="sign--input"
          name="activity"
          required
          onChange={handleChange}
          value={formData.activity}
        >
          <option value="">Activity Level</option>
          <option value="SED">Sedentary</option>
          <option value="LIT">Light</option>
          <option value="MOD">Moderate</option>
          <option value="ACT">Active</option>
          <option value="VCT">Very Active</option>
        </select>
        <select
          id="goal"
          className="sign--input"
          name="goal"
          required
          onChange={handleChange}
          value={formData.goal}
        >
          <option value="">Goal</option>
          <option value="MWL">MIld Weight Loss</option>
          <option value="WL">Wight Loss</option>
          <option value="EWL">Extreem Weight Loss</option>
          <option value="MWG">Mild Weight Gain</option>
          <option value="WG">Weight Gain</option>
          <option value="EWG">Extreem Weight Gain</option>
        </select>
        <select
          id="program_type"
          className="sign--input"
          name="program_type"
          required
          onChange={handleChange}
          value={formData.program_type}
        >
          <option value="">Program Type</option>
          <option value="HOME">Home Workout</option>
          <option value="PPL">Push Pull Leg</option>
          <option value="BSPLT">Bro Split</option>
        </select>
        <button className="sign--submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
