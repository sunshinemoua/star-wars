import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import classes from "./Spaceships.module.css";

const Starships = ({ spaceships }) => {
  console.log(spaceships);
  return (
    <div>
      <h1 className={classes.header}> SPACESHIPS </h1>
      <div className={classes.outer}>
        {spaceships.map((spaceship) => (
          <Card>
            <ul>
              <li key={spaceship.name}>
                Name: {spaceship.name}
                <br /> Model: {spaceship.model} <br /> Crew: {spaceship.crew}{" "}
                <br />
                Passengers: {spaceship.passengers} <br /> Hyperdrive Rating:{" "}
                {spaceship.hyperdrive_rating}
              </li>
            </ul>
          </Card>
        ))}{" "}
      </div>
    </div>
  );
};

export default Starships;
