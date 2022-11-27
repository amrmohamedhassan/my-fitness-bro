import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="cont">
        <div className="main--section">
          <div className="main--tittle">
            <h1>Simple fitness<br/> experince for<br/> everyone.</h1>
          </div>
          <div className="underline">
            <img src="/media/underline.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="workout--section">
          <div className="workout--section--info">
            <div className="workout--section--tittle">
              <h1>Train smarter,<br/>get stronger.</h1>
            </div>
            <div className="workout--section--p">
              <p>Exercise delivers oxygen and nutrients to your<br/> tissues and helps your cardiovascular system<br/> work more efficiently. And when your heart and<br/> lung health improve, you have more energy to<br/> tackle daily chores.</p>
            </div>
          </div>
          <div className="workout--section--img">
            <div className="workout--overlay">
              <div className="workout--button">
                <Link to="/Workout">
                  <button>Workout</button>
                </Link>
              </div>
            </div>
            <img src="/media/2.png" height="500px" width="310px" alt="" />
          </div>
        </div>
        <div className="nut--section">
          <div className="nut--section--info">
            <div className="nut--section--tittle">
              <h1>Healthy food,<br/>
                  <span> Healthy</span> life.</h1>
            </div>
            <div className="nut--section--p">
              <p>A healthy diet rich in fruits, vegetables, whole<br/> grains and low-fat dairy can help to reduce<br/>your risk of heart disease by maintaining blood <br/>pressure and cholesterol levels.</p>
            </div>
          </div>
          <div className="nut--section--img">
            <div className="nut--overlay">
                <div className="nut--button">
                  <Link to="/Nutrition">
                    <button>Nutrition</button>
                  </Link>
                </div>
            </div>
            <img src="/media/nut.png" height="500px" width="310px" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home