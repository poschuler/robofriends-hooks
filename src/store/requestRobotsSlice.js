import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  robots: [],
  loading: false,
  error: false,
};

export const fetchRobots = createAsyncThunk(
  'requestRobots/fetchRobots',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json());

    return response;
  }
);

export const requestRobotsSlice = createSlice({
  name: 'requestRobots',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRobots.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        state.robots = action.payload;
        state.loading = false;
      })
      .addCase(fetchRobots.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

//export const { setSearchField } = requestRobotsSlice.actions;

export default requestRobotsSlice.reducer;
