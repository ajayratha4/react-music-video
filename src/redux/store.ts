import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import settingsSlice from "./settings";

const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
