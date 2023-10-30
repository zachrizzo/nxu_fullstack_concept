import { createSlice } from "@reduxjs/toolkit";

// Initial state for the global slice

const globalSlice = createSlice({
  name: "global",
  initialState: {
    user: null,
    jwtToken: null,
    isAuthenticated: false, // Moved this property here from reducers}
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
      // Save JWT token to localStorage for persistence
      localStorage.setItem("jwtToken", action.payload);
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.jwtToken = null; // Changed from 'token' to 'jwtToken'
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("jwtToken"); // Remove JWT token from local storage
    },
  },
});

// Exporting actions
export const { setJwtToken, setUser, setIsAuthenticated, logout } =
  globalSlice.actions;

// Selectors for the user and JWT token
export const selectUser = (state) => state.global.user;
export const selectJwtToken = (state) => state.global.jwtToken;
export const selectIsAuthenticated = (state) => state.global.isAuthenticated;

// Exporting the reducer
export default globalSlice.reducer;
