import React, { useState, useEffect } from "react";
import axios from "axios";
import Starships from "./Starships";
import Card from "./Card";
import Pics from "./Pics";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Star Wars </h1>
      <h2>Starships</h2>

      <Starships />
      {/* <Pics /> */}

      <Card> HRLLO </Card>
    </div>
  );
};

export default App;
