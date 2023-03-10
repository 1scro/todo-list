import { createSlice } from "@reduxjs/toolkit";

const initialState = [...JSON.parse(localStorage.getItem("todos") ?? "[]")];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggle: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.completed = !item.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    update: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.title = action.payload.taskTitle;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    remove: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
  },
});

export const { create, remove, toggle, update } = todoSlice.actions;
export default todoSlice.reducer;
