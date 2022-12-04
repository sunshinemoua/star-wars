import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Films
      </NavLink>
      <NavLink
        to="/planets"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Planets
      </NavLink>
      <NavLink
        to="/species"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Species
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        People
      </NavLink>
      <NavLink
        to="/vehicles"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Vehicles
      </NavLink>
      <NavLink
        to="/spaceships"
        className={({ isActive }) => (isActive ? classes.active : classes.link)}
      >
        Spaceships
      </NavLink>
    </div>
  );
};

export default NavBar;
