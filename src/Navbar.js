import React from "react";
import {Link} from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "grey",
  margin: "auto 120px 120px",
  border: "grey solid 2px",
  padding: "0 3px 3px 3px",
  borderRadius: "10px"
}

export default function Navbar(props) {
  return(
    <main>
      <Link to="/" style={ styles }>Home</Link>
      <Link to="/images" style={ styles }>Images</Link>
      <Link to="/phases" style={ styles }>Phases</Link>
    </main>
  )
}
