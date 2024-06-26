import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Other reducers go here
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
