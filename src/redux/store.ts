import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import settingsSlice from "./settings";
import audioSlice from "common/MusicPlayer/audioSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsSlice,
    audio: audioSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
