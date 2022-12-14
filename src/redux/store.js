import { configureStore } from "@reduxjs/toolkit";
import { starWarsSlice } from "./starWarsSlice";

export const store = configureStore({ reducer: starWarsSlice });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
