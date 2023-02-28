import { createSlice } from "@reduxjs/toolkit";

const initialState = { contactList: [] };

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContact(state, action) {
      state.contactList = [...state.contactList, action.payload];
    }
  }
});

export const { getContact } = contactSlice.actions;
export default contactSlice.reducer;
