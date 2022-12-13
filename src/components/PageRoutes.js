import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../pages/Films";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import People from "../pages/People";
import Vehicles from "../pages/Vehicles";
import Spaceships from "../pages/Spaceships";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/species" element={<Species />} />
      <Route path="/people" element={<People />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/spaceships" element={<Spaceships />} />
    </Routes>
  );
};

export default PageRoutes;
