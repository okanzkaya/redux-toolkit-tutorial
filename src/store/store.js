import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/countReducer";

const store = configureStore({ reducer: reducer });

export default store;