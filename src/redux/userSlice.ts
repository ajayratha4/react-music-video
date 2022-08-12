import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
};
type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersData: (state: InitialState) => {
      state.loading = false;
    },
  },
});

export const { getUsersData } = userSlice.actions;

export default userSlice.reducer;
