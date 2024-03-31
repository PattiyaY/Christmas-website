import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
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
