import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

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
      {peeps.map((peep) => (
        <Card>
          {" "}
          <ul>
            <li key={peep.name}>
              Name: {peep.name} <br /> Model: {peep.model} <br /> Crew:{" "}
              {peep.crew} <br />
              Passengers: {peep.passengers} <br /> Hyperdrive Rating:{" "}
              {peep.hyperdrive_rating}
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Starships;
