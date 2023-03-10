import { useDispatch } from "react-redux";
import { actions } from "../redux/actions";

const Modal = ({ active, setActive, idTask }) => {
  const dispatch = useDispatch();
  const removeTodo = () => dispatch(actions.todo.remove(idTask));

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Подтвердите удаление</h2>
        <div>
          <button
            className="todo-buttons btn-delete-modal"
            onClick={removeTodo}
          >
            Удалить
          </button>
          <button
            className="todo-buttons btn-cancel-modal"
            onClick={() => setActive(false)}
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
