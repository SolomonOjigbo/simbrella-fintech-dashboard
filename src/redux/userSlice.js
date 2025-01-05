import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData, updateUserData } from '../services/api';
const initialState = {
    user: null,
    status: 'idle',
    error: null,
};
export const fetchUser = createAsyncThunk('user/fetchUser', async (id) => {
    const response = await fetchUserData(id);
    return response.data;
});
export const updateUser = createAsyncThunk('user/postUser', async (userData) => {
    const response = await updateUserData(userData);
    return response.data;
});
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
            .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
            .addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch user data.';
        })
            // Handle updateUser
            .addCase(updateUser.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
            .addCase(updateUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
            .addCase(updateUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to post user data.';
        });
    },
});
export default userSlice.reducer;
