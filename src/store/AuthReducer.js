import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticted: false,
  idToken: null,
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
      state.idToken = action.payload;
    },
  },
});

export const authActions = auth.actions;

export default auth.reducer;
