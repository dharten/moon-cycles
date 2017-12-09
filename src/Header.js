import React from "react";

const styles = {
  height: "169px",
  width: "100%",
  // background: "-webkit-linear-gradient(to right, #4C0001, #070000, #4C0001)",
  background: "linear-gradient(to right, #070000, #070000, #4C0001)",
  img: {
    width: "169px",
    position: "absolute",
    display: "inline-block",
    margin: "auto",
    align: "cener"
  },
  lWord: {
    fontSize: "1.26em",
    display: "block",
    zIndex: "999",
    position: "relative",
    color: "whitesmoke"
  },
  rWord: {
    fontSize: "4em",
    float: "right"
  }
}

export default function Header() {
  return(
    <div style={ styles }>
      <img src={"http://api.usno.navy.mil/imagery/moon.png?date=today&time=now"}
        style={ styles.img }
        alt=""/>
      <span style={ styles.lWord }>Current Moon Phase</span>
    </div>
  )
}
