import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/NavBar";
import { ClipLoader } from "react-spinners";
import PageRoutes from "./components/PageRoutes";

const App = () => {
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filmsURL = "https://swapi.dev/api/films";
    const planetsURL = "https://swapi.dev/api/planets";
    const speciesURL = "https://swapi.dev/api/species";
    const peopleURL = "https://swapi.dev/api/people";
    const vehiclesURL = "https://swapi.dev/api/vehicles";
    const spaceshipsURL = "https://swapi.dev/api/starships";

    Promise.all([
      axios.get(filmsURL).then((response) => {
        setFilms(response.data);
      }),
      axios.get(planetsURL).then((response) => {
        setPlanets(response.data);
      }),
      axios.get(speciesURL).then((response) => {
        setSpecies(response.data);
      }),
      axios.get(peopleURL).then((response) => {
        setPeople(response.data);
      }),
      axios.get(vehiclesURL).then((response) => {
        setVehicles(response.data);
      }),
      axios.get(spaceshipsURL).then((response) => {
        setSpaceships(response.data.results);
      }),
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
      <PageRoutes spaceships={spaceships} />
    </BrowserRouter>
  );
};

export default App;
