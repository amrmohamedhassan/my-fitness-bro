import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";
import axios from "axios";
const Loading = () => {
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    authAxios
      .get("https://kenko.dhulfiqar.com/trainer/survey", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        navigate("/Dashboard");
      })
      .catch((res) => {
        console.log(res);
        navigate("/Survey");
      });
  }, []);

  return (
    <div className="Loading">
      <h1 className="display-1">Loading...</h1>
    </div>
  );
};

export default Loading;
