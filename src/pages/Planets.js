import Card from "../components/Card";
import classes from "./DataCard.module.css";
import { useSelector } from "react-redux";

const Planets = () => {
  const { planets } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}>PLANETS</h1>
      <div className={classes.outer}>
        {planets.map((planet) => (
          <Card key={planet.name}>
            <ul>
              <li>Name: {planet.name}</li>
              <br />
              <li>Terrain: {planet.terrain}</li>
              <br />
              <li>Population: {planet.population}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Planets;
