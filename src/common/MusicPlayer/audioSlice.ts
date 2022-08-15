import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SongList = {
  id: number;
  name: string;
  src: string;
  img: string;
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
  songsList: [
    {
      id: 123,
      name: "Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam",
      src: "https://pagalworld.com.se/files/download/id/6591",
      img: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62",
    },
    {
      id: 123,
      name: "Raataan Lambiyan | Sidharth | Kiara |Asees",
      src: "https://pagalworld.com.se/files/download/id/3198",
      img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/07/Raatan-Lambiyan-Lyrics-Shersaah.jpg",
    },
  ],
  currentIndex: 1,
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
  },
});

export const { setVolume, changeSong } = audioSlice.actions;

export default audioSlice.reducer;
