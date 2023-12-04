import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticted: false,
  token: 0,
};

const auth = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticted = true;
    },
    logout(state) {
      state.isAuthenticted = false;
    },
    addToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = auth.actions;

export default auth.reducer;
