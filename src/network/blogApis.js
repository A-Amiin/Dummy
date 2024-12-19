import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogDetails = createAsyncThunk(
	"Blog/fetchBlogDetails",
	async ({ page, limit }) => {
		const response = await axios.get("http://localhost:3000/Blog", {
			params: { _page: page, _limit: limit }
		});
		return response.data;
	}
);
