const { configureStore } = require("@reduxjs/toolkit");
function chatReducer(state = { messages: [], message: "", answer: "Hello User,How are You?" }, action) {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_ANSWER":
      return { ...state, answer: action.payload };
    default:
      return state;
  }
}
const store = configureStore({
  reducer: chatReducer,
});
module.exports = store;
