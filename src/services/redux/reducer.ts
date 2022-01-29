import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../data/users";

const userToDelete: any = {};

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData, selectedValue: userToDelete },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    getSingleUser: (state, action) => {
      state.selectedValue = state.value.find(
        (user) => user.id === action.payload.id
      );
    },
    editUser: (state, action) => {
      state.value.forEach((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.email = action.payload.email;
        }
      });
    },
  },
});
export const { addUser, deleteUser, editUser, getSingleUser } =
  userSlice.actions;
export default userSlice.reducer;
