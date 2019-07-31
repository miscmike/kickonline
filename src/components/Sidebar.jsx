import React from "react";

function SideBar(props) {
  console.log(props);
  return (
    <div>
      <p>{props.tag}</p>
    </div>
  );

  // render() {
  //     return (
  //         <div>{props.name}</div>
  //     )
  // }
}

export default SideBar;
