import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export const persistor = persistStore(store);
