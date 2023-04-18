import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchField: '',
};

export const searchRobotsSlice = createSlice({
  name: 'searchRobots',
  initialState: initialState,
  reducers: {
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = searchRobotsSlice.actions;

export default searchRobotsSlice.reducer;
