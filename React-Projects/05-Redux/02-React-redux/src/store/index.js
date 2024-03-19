import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  LightTheme: true
}

function counterReducer(store = INITIAL_VALUE, action) {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1, theme: store.theme }
  }
  else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1, theme: store.theme }
  }
  else if (action.type === "ADD") {
    newStore = { counter: store.counter + Number(action.payload.number), theme: store.theme }
  }
  else if (action.type === "SUBTRACT") {
    newStore = { counter: store.counter - Number(action.payload.number), theme: store.theme }
  }
  else if (action.type === "THEME") {
    newStore = { LightTheme: !store.LightTheme, counter: store.counter }
  }
  return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;