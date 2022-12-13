import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/NavBar";
import { ClipLoader } from "react-spinners";
import PageRoutes from "./components/PageRoutes";
import {
  getFilms,
  getPlanets,
  getSpecies,
  getPeople,
  getVehicles,
  getSpaceships,
} from "./pages/redux/starWarsSlice";

const App = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      dispatch(getFilms()),
      dispatch(getPlanets()),
      dispatch(getSpecies()),
      dispatch(getPeople()),
      dispatch(getVehicles()),
      dispatch(getSpaceships()),
    ]).then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <ClipLoader loading={loading} size={150} />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Navbar />
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
