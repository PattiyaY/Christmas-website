import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <div className="navbar"></div>
      <form className="appForm">
        <div className="display">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 30,
              strings: ["Merry C h r i s t m a s!", "HO HO HO!"],
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
