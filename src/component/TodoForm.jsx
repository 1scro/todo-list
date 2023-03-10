import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/actions";
import { v4 as uuid } from "uuid";

export const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  //Обработка клика при добавлении задачи
  const handleClick = () => {
    dispatch(
      actions.todo.create({ id: uuid(), title: todoText, completed: false })
    );
    setTodoText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="todo-form">
      <div className="todo-f">
        <input
          className="todo-form__input"
          value={todoText}
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите задачу..."
        />
      </div>
      <button className="todo-form__btn todo-buttons" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};
