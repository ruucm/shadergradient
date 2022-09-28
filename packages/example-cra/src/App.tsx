import React from "react";
import "./App.css";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { LCanvas, Gradient } from "shadergradient";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <LCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <Gradient cDistance={32} cPolarAngle={125} />
      </LCanvas>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
