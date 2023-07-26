const { createSlice } = require('@reduxjs/toolkit');
const fileSlice = createSlice({
  name: 'file',
  initialState: {
    files: [],
    fileupload:[]

  },
  reducers: {
    setfiles: (state, action) => {
      state.files = action.payload;
    },
    setfileupload: (state, action) => {
      state.fileupload = action.payload;
    },
  },
});

export const { setfiles , setfileupload} = fileSlice.actions;
export default fileSlice.reducer;
