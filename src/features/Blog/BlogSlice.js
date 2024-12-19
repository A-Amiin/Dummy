import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogDetails } from "../../network/blogApis";

const BlogSlice = createSlice({
	name: "Blog",
	initialState: {
		blogDetails: [],
		status: "idle",
		error: null,
		loading: false
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBlogDetails.pending, (state) => {
				state.status = "loading";
				state.loading = true;
			})
			.addCase(fetchBlogDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.blogDetails = action.payload;
				state.loading = false;
			})
			.addCase(fetchBlogDetails.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
				state.loading = false;
			});
	}
});

export default BlogSlice.reducer;
export { fetchBlogDetails };
