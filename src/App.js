import React from "react";
import logo from "./kickonline_logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming soon!</p>
        <motion.div
          animate={{
            x: 0,
            width: 100,
            height: 100,
            backgroundColor: "rgb(40,44,61)",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "relative",
            transitionEnd: {
              display: "visible"
            }
          }}
          whileHover={{ rotate: 360, x: 500, backgroundColor: "#FFF" }}
          transition={spring}
        />
      </header>
    </div>
  );
}

const spring = {
  type: "spring",
  damping: 200,
  stiffness: 20
};

export default App;
