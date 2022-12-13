import Card from "../components/Card";
import classes from "./DataCard.module.css";
import { useSelector } from "react-redux";

const People = () => {
  const { people } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}> PEOPLE </h1>
      <div className={classes.outer}>
        {people.map((person) => (
          <Card key={person.name}>
            <ul>
              <li>Name: {person.name}</li> <br />
              <li>Gender: {person.gender}</li> <br />
              <li>Birth Year: {person.birth_year}</li> <br />
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default People;
