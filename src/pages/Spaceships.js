import Card from "../components/Card";
import classes from "./DataCard.module.css";
import { useSelector } from "react-redux";

const Starships = () => {
  const { spaceships } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}> SPACESHIPS </h1>
      <div className={classes.outer}>
        {spaceships.map((spaceship) => (
          <Card key={spaceship.name}>
            <ul>
              <li>Name: {spaceship.name}</li>
              <br />
              <li>Model: {spaceship.model}</li> <br />
              <li>Passengers: {spaceship.passengers} </li>
              <br />
              <li>Hyperdrive Rating: {spaceship.hyperdrive_rating}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Starships;
