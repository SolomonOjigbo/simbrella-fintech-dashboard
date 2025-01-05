import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserData, updateUserData } from '../services/api';

interface User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  accountBalance: number;
  transactions: any[];
  recentTransactions: any[];
  loans: any[];
}

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};




export const fetchUser = createAsyncThunk('user/fetchUser', async (id: String) => {
  const response = await fetchUserData(id);
  return response.data as User;
});

export const updateUser = createAsyncThunk('user/postUser', async (userData: Partial<User>) => {
  const response = await updateUserData(userData);
  return response.data;
});


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
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
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
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
