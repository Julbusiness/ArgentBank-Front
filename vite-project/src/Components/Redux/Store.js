import { configureStore } from "@reduxjs/toolkit";
import { editSlice } from "./EditReducer";

export const store = configureStore({
	reducer: {
		EditReducer: editSlice.reducer,
	},
});
