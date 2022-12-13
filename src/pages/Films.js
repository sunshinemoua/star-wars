import Card from "../components/Card";
import classes from "./DataCard.module.css";
import { useSelector } from "react-redux";

const Films = () => {
  const { films } = useSelector((state) => state.reducer);
  return (
    <div>
      <h1 className={classes.header}>FILMS</h1>
      <div className={classes.outer}>
        {films.map((film) => (
          <Card key={film.title}>
            <ul>
              <li> Name: {film.title}</li>
              <br />
              <li> Episode: {film.episode_id}</li>
              <br />
              <li> Release Date: {film.release_date}</li>
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Films;
