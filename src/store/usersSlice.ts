import { User, UsersState } from '@/utils/users';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filter: { name: '', username: '', email: '', phone: '' },
  loading: false,
  error: null, 
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch users.');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<UsersState['filter']>>) {
      state.filter = { ...state.filter, ...action.payload };
      state.filteredUsers = state.users.filter((user) => {
        return (
          user.name.toLowerCase().includes(state.filter.name.toLowerCase()) &&
          user.username.toLowerCase().includes(state.filter.username.toLowerCase()) &&
          user.email.toLowerCase().includes(state.filter.email.toLowerCase()) &&
          user.phone.toLowerCase().includes(state.filter.phone.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;  
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.loading = false;
      state.error = null;  
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;  
    });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;