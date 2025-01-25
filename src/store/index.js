import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import fetchStatus from './fetchStatus';
import bagSlice from './bagSlice';
import searchSlice from './searchSlice';



const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatus.reducer,
    bag: bagSlice.reducer,
    search: searchSlice.reducer,


  },
});

export default myntraStore;
