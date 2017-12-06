import React from "react";
import {Link} from "react-router-dom";

const styles = {
  columns: "2"
}

export default function Navbar(props) {
  return(
    <main style={ styles }>
      <Link to="/">Home</Link>
      <Link to="/images">Images</Link>
    </main>
  )
}
