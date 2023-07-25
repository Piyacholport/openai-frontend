const { createSlice } = require('@reduxjs/toolkit');
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    message: '',
    answer: 'Hello User, How are You?',

  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { setMessages, setMessage, setAnswer, setCount } = chatSlice.actions;
export default chatSlice.reducer;
