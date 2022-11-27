import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";
import axios from "axios";

const Sign = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    birth_date: "",
    gender: "",
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
      .post("https://kenko.dhulfiqar.com/auths/register", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        birth_date: formData.birth_date,
        gender: formData.gender,
      })
      .then((res) => {
        navigate("/Login");
      })
      .catch((res) => {
        alert(res.response.data.username);
      });
  }

  return (
    <div className="sign--backGround">
      <form className="form--sign" onSubmit={handleSubmit}>
        <Link to="/">
          <img src="../../media/Logo.svg" alt="Logo" />
        </Link>
        <input
          type="text"
          placeholder="first_Name"
          className="sign--input"
          name="first_name"
          required
          onChange={handleChange}
          value={formData.first_name}
        />
        <input
          type="text"
          placeholder="last_Name"
          className="sign--input"
          name="last_name"
          required
          onChange={handleChange}
          value={formData.last_name}
        />
        <input
          type="text"
          placeholder="username"
          className="sign--input"
          name="username"
          required
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          placeholder="Email"
          className="sign--input"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="sign--input"
          name="password"
          required
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="date"
          className="sign--input"
          name="birth_date"
          required
          max="2003-01-01"
          onChange={handleChange}
          value={formData.birth_date}
        />
        <select
          id="gender"
          className="sign--input"
          name="gender"
          required
          onChange={handleChange}
          value={formData.gender}
        >
          <option value="">Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <button className="sign--submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Sign;
