import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
  name: "bag",
  initialState: [],

  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload)  //YAHA STATAE KO modify kiya or state ko hi change kr diya es liye retun nhi lgaya
    },
    removeFromBag: (state, action) => {
      return state.filter(itemID => itemID != action.payload) // yaha hmne return es liye lgya  becuase hum yaha modify nhi kr re hai state ko , yha hum new array return kr  re hai becuase of filter method

    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});



export const bagActions = bagSlice.actions;
export default bagSlice;

