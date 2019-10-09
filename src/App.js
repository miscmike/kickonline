import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";
import Zfont from "zfont";
import Zdog from "zdog";
// import { useSpring, animated } from "react-spring";

import {
  Illustration,
  Ellipse,
  Shape,
  RoundedRect,
  useRender
} from "react-zdog";
// New react-spring target, for native animation outside of React
import { a, useSpring } from "react-spring/zdog";

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2;

/** --- Assembly ----------------------------------------- */
function Guy() {
  // Change motion every second
  // const [up, setUp] = useState(true);
  // useEffect(
  //   () => void setInterval(() => setUp(previous => !previous), 450),
  //   []
  // );
  // // Turn static values into animated values
  // const { rotation, color, size } = useSpring({
  //   size: up ? 1.2 : 0.2,
  //   color: up ? "#EA0" : "tomato",
  //   rotation: up ? 0 : Math.PI
  // });
  // // useRender allows us to hook into the render-loop
  // const ref = useRef();
  // let t = 0;
  // useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));
  return (
    // <Shape ref={ref} path={[{ x: -3 }, { x: 3 }]} stroke={4} color="#747B9E">
    <Shape
      path={[{ x: -1.5 }, { x: 1.5 }]}
      translate={{ y: -6 }}
      stroke={1}
      color="#E1E5EE"
    ></Shape>
    // {/* </a.Anchor> */}
    // </Shape>
  );
}

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
        {/* <Illustration zoom={8}>
          <Shape stroke={20} color="lightblue" rotate={{ x: Math.PI }} />
        </Illustration> */}
        <Illustration zoom={8}>
          <Ellipse
            diameter={20}
            rotate={{ x: -TAU / 3 }}
            translate={{ y: 15, z: -100 }}
            stroke={4}
            color="#373740"
            fill
          />
          <Guy />
        </Illustration>
        {/* <motion.div
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
        /> */}
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
              name:
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              email:
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">tell me more</button>
          </p>
        </form>
      </header>
    </div>
  );
}

// const spring = {
//   type: "spring",
//   damping: 200,
//   stiffness: 20
// };

export default App;
