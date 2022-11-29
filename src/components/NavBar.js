import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../pages/Films";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import People from "../pages/People";
import Vehicles from "../pages/Vehicles";

import Spaceships from "../pages/Spaceships";

const NavBar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/films"> Films </Link>
      <Link to="/planets"> Planets </Link>
      <Link to="/species"> Species </Link>
      <Link to="/people"> People </Link>
      <Link to="/vehicles"> Vehicles </Link>
      <Link to="/spaceships"> Spaceships </Link>
    </div>
  );
};

export default NavBar;
