import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import axios from "axios";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    console.log(window.token);
  }, [window.token]);
  const handleLogout = () => {
    authAxios
      .post("https://kenko.dhulfiqar.com/auths/logout", {
        jwt: localStorage.getItem("jwt"),
      })
      .then((res) => {
        alert(res.data.message);
        window.localStorage.setItem("jwt", "");
        window.token = null;
        navigate("/");
      })
      .catch((res) => {
        console.log(res);
      });
  };
  if (
    window.token === window.localStorage.getItem("jwt") &&
    window.token !== ""
  ) {
    return (
      <nav>
        <div className="cont">
          <Link to="/">
            <div className="logo">
              <img src="/media/logo.svg" width="100px" alt="" />
            </div>
          </Link>
          <ul className="nav-list">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/Workout" style={{ textDecoration: "none" }}>
              <li>Workout</li>
            </Link>
            <Link to="/Nutrition" style={{ textDecoration: "none" }}>
              <li>Nutrition</li>
            </Link>
            <Link to="/Dashboard" style={{ textDecoration: "none" }}>
              <li>Dashboard</li>
            </Link>
          </ul>
          <div className="btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="smallScreenMenu">
            <GiHamburgerMenu
              color="#7cbb4b"
              fontSize={31}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="smallScreenOverlay">
                <MdClose
                  color="#7cbb4b"
                  fontSize={31}
                  className="overlayClose"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="smallScreen-nav-list">
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/Workout"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Workout</li>
                  </Link>
                  <Link
                    to="/Nutrition"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Nutrition</li>
                  </Link>
                  <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                    <li>Dashboard</li>
                  </Link>
                </ul>
                <div className="smallScreen-btn">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="cont">
          <Link to="/">
            <div className="logo">
              <img src="/media/logo.svg" width="100px" alt="Logo" />
            </div>
          </Link>
          <ul className="nav-list">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/Workout" style={{ textDecoration: "none" }}>
              <li>Workout</li>
            </Link>
            <Link to="/Nutrition" style={{ textDecoration: "none" }}>
              <li>Nutrition</li>
            </Link>
          </ul>
          <div className="btn">
            <Link to="/Login">
              <button>Login/Signup</button>
            </Link>
          </div>
          <div className="smallScreenMenu">
            <GiHamburgerMenu
              color="#7cbb4b"
              fontSize={31}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="smallScreenOverlay">
                <MdClose
                  color="#7cbb4b"
                  fontSize={31}
                  className="overlayClose"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="smallScreen-nav-list" >
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/Workout"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Workout</li>
                  </Link>
                  <Link
                    to="/Nutrition"
                    style={{ textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    <li>Nutrition</li>
                  </Link>
                </ul>
                <div className="smallScreen-btn">
                  <Link to="/Login">
                    <button>Login/Signup</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
