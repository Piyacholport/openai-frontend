const { createSlice } = require('@reduxjs/toolkit');
const fileSlice = createSlice({
  name: 'file',
  initialState: {
    files: [],
    

  },
  reducers: {
    setfiles: (state, action) => {
      state.files = action.payload;
    },

  },
});

export const { setfiles } = fileSlice.actions;
export default fileSlice.reducer;
