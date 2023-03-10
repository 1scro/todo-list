import { allTodos, ids, getTodoById, todoQuantity } from "./todoSelectors";

export const selectors = {
  todo: {
    allTodos: allTodos,
    ids: ids,
    getTodoById: getTodoById,
    todoQuantity: todoQuantity,
  },
};
