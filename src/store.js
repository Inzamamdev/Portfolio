import { configureStore } from "@reduxjs/toolkit";

import darModeReducer from "./features/theme/darkSlice";

export const store = configureStore({
  reducer: {
    darkMode: darModeReducer,
  },
});
