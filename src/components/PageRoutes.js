import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../pages/Films";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import People from "../pages/People";
import Vehicles from "../pages/Vehicles";
import Spaceships from "../pages/Spaceships";

const PageRoutes = ({
  films,
  planets,
  species,
  people,
  vehicles,
  spaceships,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films films={films} />} />
      <Route path="/planets" element={<Planets planets={planets} />} />
      <Route path="/species" element={<Species species={species} />} />
      <Route path="/people" element={<People people={people} />} />
      <Route path="/vehicles" element={<Vehicles vehicles={vehicles} />} />
      <Route
        path="/spaceships"
        element={<Spaceships spaceships={spaceships} />}
      />
    </Routes>
  );
};

export default PageRoutes;
