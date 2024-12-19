import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeam = createAsyncThunk("OurWorkingExperts/fetchTeam", async () => {
    const response = await axios.get(
        "http://localhost:3000/OurWorkingExperts"
    );
    return response.data;
});