import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectors } from "../redux/selectors";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const allTodos = useSelector(selectors.todo.allTodos, shallowEqual);

  return (
    <div className="todo-list">
      {allTodos.length > 0 ? (
        <ul className="list">
          {[...allTodos]
            .sort((a, _) => (a.completed ? 1 : -1))
            .map((todo) => (
              <li key={todo.id} className="list__item">
                <TodoItem id={todo.id} />
              </li>
            ))}
        </ul>
      ) : (
        <h3>Нет задач</h3>
      )}
    </div>
  );
};
