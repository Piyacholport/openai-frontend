const { createSlice } = require('@reduxjs/toolkit');
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    message: '',
    answer: 'Hello User, How are You?',
    count: 0,
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
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setMessages, setMessage, setAnswer, setCount } = chatSlice.actions;
export default chatSlice.reducer;
