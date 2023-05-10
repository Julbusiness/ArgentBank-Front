import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
	name: "EditRedux",
	initialState: {
		user: "",
	},
	reducers: {
		sendUser: (state, action) => {
			state.user = action.payload;
		},
	},
});
