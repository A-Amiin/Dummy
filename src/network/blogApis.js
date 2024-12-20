import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogDetails = createAsyncThunk(
	"Blog/fetchBlogDetails",
	async ({ page, limit }) => {
		try {
			const response = await axios.get("http://localhost:3000/Blog", {
				params: { _page: page, _limit: limit }
			});
			return response.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const fetchSingleBlog = createAsyncThunk(
	"Blog/fetchSingleBlog",
	async (id) => {
		try {
			const response = await axios.get(`http://localhost:3000/Blog/${id}`);
			return response.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);
