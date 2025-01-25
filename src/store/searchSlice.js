import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  filteredItems: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
