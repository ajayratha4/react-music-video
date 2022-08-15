import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SongList = {
  id: number;
  songName: string;
  songArtist: string;
  songSource: string;
  songImage: string;
};

export type AudioSliceState = {
  volume: number;
  songsList: SongList[];
  currentIndex: number;
};
export type AudioSlice = {
  audio: AudioSliceState;
};
const initialState: AudioSliceState = {
  volume: 30,
  songsList: [],
  currentIndex: 0,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setVolume: (state: AudioSliceState, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    changeSong: (state: AudioSliceState, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setSonges: (
      state: AudioSliceState,
      action: PayloadAction<{ data: SongList[]; index: number }>
    ) => {
      state.songsList = action.payload.data;
      state.currentIndex = action.payload.index;
    },
  },
});

export const { setVolume, changeSong, setSonges } = audioSlice.actions;

export default audioSlice.reducer;
