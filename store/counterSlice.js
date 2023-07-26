const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, setCount } = counterSlice.actions;
export default counterSlice.reducer;
