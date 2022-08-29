import { createSlice } from "@reduxjs/toolkit";
import { servicesData } from "../../Data";

const initialState = {
  data: servicesData,
  display: [
    {
      id: "00",
      service: "website dev",
      serviceDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus sit harum dolores! Modi tempora nobis commodi quibusdam maiores maxime dicta nesciunt soluta quam, itaque consequuntur a aliquid dolorum fugit quas alias tempore, delectus voluptas? Pariatur ullam in consequatur velit?",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    displaySer: (state, { payload }) => {
      console.log(payload);
      const displaySer = state.data.filter((ser) => {
        return ser.id === payload;
      });
      console.log(displaySer);
      state.display = displaySer;
      console.log(state.display);
    },
  },
});

export const { displaySer } = servicesSlice.actions;
export default servicesSlice.reducer;
