import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsSliceState = {
  sidebar: boolean;
  audioPlayer: boolean;
  modal: boolean;
};
export type SettingsSlice = {
  settings: SettingsSliceState;
};
const initialState: SettingsSliceState = {
  sidebar: false,
  audioPlayer: true,
  modal: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSidebar: (state: SettingsSliceState, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
    setAudioPlayer: (
      state: SettingsSliceState,
      action: PayloadAction<boolean>
    ) => {
      state.audioPlayer = action.payload;
    },
    setModal: (state: SettingsSliceState, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { setSidebar, setAudioPlayer, setModal } = settingsSlice.actions;

export default settingsSlice.reducer;
