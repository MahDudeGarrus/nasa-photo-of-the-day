import React from "react";
import NasaPhoto from './components/NasaPhoto'
import NasaHeader from './components/NasaHeader'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NasaHeader />
        <NasaPhoto />
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
