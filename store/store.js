// const { configureStore } = require("@reduxjs/toolkit");
// const chatReducer = require("./chatReducer");
// const counterReducer = require("./counterSlice");

// const store = configureStore({
//   reducer: {
//     chat: chatReducer,
//     counter: counterReducer,
//   },
// });

// module.exports = store;

const { configureStore, combineReducers } = require('@reduxjs/toolkit');
import chatReducer from './chatReducer';
import fileReducer from './fileReducer';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  chat: chatReducer,
  file: fileReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

module.exports = store;
