import React, { useState, useEffect } from "react";
import axios from "axios";
import Starships from "./pages/Spaceships";
import Card from "./components/Card";
import Navbar from "./components/NavBar";
import Pics from "./Pics";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Star Wars </h1>
    </div>
  );
};

export default App;
