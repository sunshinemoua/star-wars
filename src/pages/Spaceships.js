import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import classes from "./Spaceships.module.css";

const Starships = () => {
  const starshipURL = "https://swapi.dev/api/starships";

  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    axios.get(starshipURL).then((response) => {
      setPeeps(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1 className={classes.header}> SPACESHIPS </h1>
      <div className={classes.outer}>
        {peeps.map((peep) => (
          <Card>
            <ul>
              <li key={peep.name}>
                Name: {peep.name} <br /> Model: {peep.model} <br /> Crew:{" "}
                {peep.crew} <br />
                Passengers: {peep.passengers} <br /> Hyperdrive Rating:{" "}
                {peep.hyperdrive_rating}
              </li>
            </ul>
          </Card>
        ))}{" "}
      </div>
    </div>
  );
};

export default Starships;
