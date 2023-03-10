import { createSelector } from "@reduxjs/toolkit";
import { createCachedSelector } from "re-reselect";

// массив всех задач;
export const allTodos = (state) => state.todo;

//количество задач
export const todoQuantity = createSelector(allTodos, (items) => items.length);

// массив идентификаторов задач;
export const ids = createSelector(allTodos, (items) =>
  items.map((item) => item.id)
);

//получить задачу по идентификатору;
export const getTodoById = createCachedSelector(
  allTodos,
  (state, id) => id,
  (todos, id) => todos.find((item) => item.id === id)
)((state, id) => id);
