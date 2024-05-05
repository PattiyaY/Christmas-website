import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import cartoonGirl from "./img/Cartoon-girl.png";
import cartoonBoy from "./img/Cartoon-boy.png";
import tree from "./img/tree.png";

function HomePage() {
  return (
    <div className="App">
      <div className="navbarContainer">
        <div className="bg">
          <img className="tree" src={tree} alt="tree-cartoon" />
        </div>

        <div className="cartoon">
          <img className="image" src={cartoonGirl} alt="girl-cartoon" />
          <img className="image" src={cartoonBoy} alt="boy-cartoon" />
        </div>
      </div>

      <form className="appForm">
        <div className="welcomeText">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: ["Merry Christmas!", "HO HO HO!"],
            }}
          />
        </div>

        <div className="buttons">
          <button className="buttonHome">Click me!</button>
          <button className="buttonHome">Click me!</button>
          <button className="buttonHome">Click me!</button>
          <button className="buttonHome">Click me!</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
