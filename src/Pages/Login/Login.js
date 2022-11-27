import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    axios
      .post("https://kenko.dhulfiqar.com/auths/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("jwt", res.data.jwt);
        window.token = res.data.jwt;
        navigate("/Loading");
      })
      .catch((res) => {
        alert(res.response.data.detail);
      });
  }
  return (
    <div className="form--backGround">
      <form className="form--login" onSubmit={handleSubmit}>
        <Link to="/">
          <img src="../../media/Logo.svg" alt="Logo" />
        </Link>
        <h3 className="form--title">Login</h3>
        <input
          type="text"
          placeholder="User Name"
          className="form--input"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          required
          onChange={handleChange}
          value={formData.password}
        />

        <button className="login--submit">Submit</button>
        <Link to="/Sign">
          <h3 className="signup--account">Don't have account yet!</h3>
        </Link>
      </form>
    </div>
  );
};

export default Login;
