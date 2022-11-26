import React, { useState, useEffect } from "react";
import axios from "axios";
import Starships from "./pages/Spaceships";
import Card from "./components/Card";
import Navbar from "./components/NavBar";
import Pics from "./Pics";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <Navbar></Navbar>
    </div>
  );
};

export default App;
