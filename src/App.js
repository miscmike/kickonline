import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
// import { useSpring, animated } from "react-spring";

function App() {
  // const props = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   delay: 4000,
  //   config: { duration: 4000, easing: t => t * t * t }
  // });

  return (
    <div className="App">
      <header className="App-header">
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
          whileHover={{ rotate: 360, x: 500, y: -500, backgroundColor: "#FFF" }}
          transition={spring}
        />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Start the year right
        {/* <div>
          <animated.div style={props}>hello</animated.div>
        </div> */}
        {/* <QRCode value="http://facebook.github.io/react/" /> */}
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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
