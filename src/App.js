import React from "react";
import {Switch, Route} from "react-router-dom";

// import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Images from "./components/Images";
import Phases from "./components/Phases";
// import Footer from "./Footer";

export default function App() {
  return(
    <div>
      {/* <Header /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/images" component={ Images } />
        <Route path="/phases" component={ Phases } />
      </Switch>
      {/* <Footer /> */}
    </div>
  )
}
