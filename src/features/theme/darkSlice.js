import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: document.documentElement.classList.contains("dark"), // Persist theme using localStorage
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      // Update localStorage
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
