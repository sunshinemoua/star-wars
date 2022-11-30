import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to="/" activeClassName={classes.active} className={classes.link}>
        Home
      </NavLink>
      <NavLink
        to="/films"
        activeClassName={classes.active}
        className={classes.link}
      >
        {" "}
        Films{" "}
      </NavLink>
      <NavLink to="/planets" className={classes.link}>
        {" "}
        Planets{" "}
      </NavLink>
      <NavLink to="/species" className={classes.link}>
        {" "}
        Species{" "}
      </NavLink>
      <NavLink to="/people" className={classes.link}>
        {" "}
        People{" "}
      </NavLink>
      <NavLink to="/vehicles" className={classes.link}>
        {" "}
        Vehicles{" "}
      </NavLink>
      <NavLink to="/spaceships" className={classes.link}>
        {" "}
        Spaceships{" "}
      </NavLink>
    </div>
  );
};

export default NavBar;
