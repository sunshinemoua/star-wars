import { useSelector } from "react-redux";
import Card from "../components/Card";
import classes from "./DataCard.module.css";

const Species = () => {
  const { species } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}> SPECIES </h1>
      <div className={classes.outer}>
        {species.map((specie) => (
          <Card key={specie.name}>
            <ul>
              <li> Name: {specie.name} </li> <br />
              <li> Classification: {specie.classification} </li>
              <br />
              <li> Average Lifespan: {specie.average_lifespan} </li>
              <br />
              <li> Language: {specie.language} </li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Species;
