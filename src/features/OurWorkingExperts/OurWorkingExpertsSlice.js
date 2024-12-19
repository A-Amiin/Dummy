import { createSlice } from '@reduxjs/toolkit';
import { fetchTeam } from '../../network/teamApis';

const ourWorkingExpertsSlice = createSlice({
    name: 'OurWorkingExperts',
    initialState: {
        team: [],
        status: "idle",
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeam.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
            })
            .addCase(fetchTeam.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.team = action.payload;
                state.loading = false;
            })
            .addCase(fetchTeam.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export { fetchTeam };
export default ourWorkingExpertsSlice.reducer;