import React from "react";
import logo from "./kickonline_logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
// import Profile from "components/Profile";
// import SideNav from "components/SideNav";
// import NavList from "components/NavList";
// import Content from "components/Content";

const ProfileProps = {
  name: "Mike Crawford",
  tag: "What you see is most likely what you won't get"
};

function App() {
  return (
    <div className="App">
      <Sidebar props={ProfileProps}>
        {/* <Profile props={ProfileProps} />
        <SideNav>
          <NavList />
        </SideNav> */}
      </Sidebar>
      {/* <Content /> */}
      <img src={logo} className="App-logo" alt="logo" />
      <p>A thing will go here</p>
    </div>
  );
}

export default App;
