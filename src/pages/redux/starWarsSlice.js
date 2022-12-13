import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFilms = createAsyncThunk("getFilms", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/films");
  return response.data.results;
});

export const getPlanets = createAsyncThunk("getPlanets", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/planets");
  return response.data.results;
});

export const getSpecies = createAsyncThunk("getSpecies", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/species");
  return response.data.results;
});

export const getPeople = createAsyncThunk("getPeople", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/people");
  return response.data.results;
});

export const getVehicles = createAsyncThunk("getVehicles", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/vehicles");
  return response.data.results;
});

export const getSpaceships = createAsyncThunk("getSpaceships", async () => {
  const response = await axios.get("https://swapi.py4e.com//api/starships");
  return response.data.results;
});

export const starWarsSlice = createSlice({
  name: "starWars",
  initialState: {
    films: [],
    planets: [],
    species: [],
    people: [],
    vehicles: [],
    spaceships: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getFilms.fulfilled, (state, action) => {
      // Add user to the state array
      state.films = [...action.payload];
    });

    builder.addCase(getPlanets.fulfilled, (state, action) => {
      state.planets = [...action.payload];
    });

    builder.addCase(getSpecies.fulfilled, (state, action) => {
      state.species = [...action.payload];
    });

    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.people = [...action.payload];
    });

    builder.addCase(getVehicles.fulfilled, (state, action) => {
      state.vehicles = [...action.payload];
    });

    builder.addCase(getSpaceships.fulfilled, (state, action) => {
      state.spaceships = [...action.payload];
    });
  },
});
