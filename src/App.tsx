import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import cartoonGirl from "./img/Cartoon-girl.png";
import cartoonBoy from "./img/Cartoon-boy.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img className="image" src={cartoonGirl} alt="girl-cartoon" />

        <img className="image" src={cartoonBoy} alt="boy-cartoon" />
      </div>
      <form className="appForm">
        <div className="welcomeText">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 30,
              strings: ["Merry Christmas!", "HO HO HO!"],
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
