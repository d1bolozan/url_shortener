import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../config";

export const createShortLink = createAsyncThunk("links/createShortLink", async url => {
	try {
		const response = await fetch(API_BASE_URL + url, { method: "POST" });
		return await response.json();
	} catch (error) {
		console.log(error);
	}
});

const initialState = {
	items: [],
	loading: "idle",
};

const linkSlice = createSlice({
	name: "links",
	initialState,
	reducers: {},
	extraReducers: {
		[createShortLink.rejected]: state => {
			state.loading = "rejected";
		},
		[createShortLink.pending]: state => {
			state.loading = "loading";
		},
		[createShortLink.fulfilled]: (state, action) => {
			const { ok, result } = action.payload;
			if (ok) {
				state.items.push(result);
				state.loading = "idle";
			} else {
				state.loading = "error";
			}
		},
	},
});

export const selectLinks = state => state.links.items;
export const selectLoading = state => state.links.loading;

export default linkSlice.reducer;
