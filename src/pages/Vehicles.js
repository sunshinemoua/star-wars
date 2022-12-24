import { useSelector } from "react-redux";
import Card from "../components/Card";
import classes from "./DataCard.module.css";

const Vehicles = () => {
  const { vehicles } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}>VEHICLES</h1>
      <div className={classes.outer}>
        {vehicles.map((vehicle) => (
          <Card key={vehicle.name}>
            <ul>
              <li> Name: {vehicle.name}</li>
              <br />
              <li> Model: {vehicle.model}</li>
              <br />
              <li> Passengers: {vehicle.passengers}</li>
              <br />
              <li> Cargo Capacity: {vehicle.cargo_capacity}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
