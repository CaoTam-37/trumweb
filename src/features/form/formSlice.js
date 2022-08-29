import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  desiredPosition: "",
  desiredSalary: "",
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      state[payload.name] = payload.input;
    },
    handleSubmit: (state, { payload }) => {
      console.log(state.email);
    },
  },
});

export const { handleChange, handleSubmit } = formSlice.actions;
export default formSlice.reducer;
