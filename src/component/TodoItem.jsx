import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { selectors } from "../redux/selectors";
import { actions } from "../redux/actions";
import Modal from "./Modal";

export const TodoItem = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const ref = useRef(null);
  const todo = useSelector((state) =>
    selectors.todo.getTodoById(state, props.id)
  );
  const { id, title, completed } = todo;
  const [taskTitle, setTaskTitle] = useState(title);

  const dispatch = useDispatch();

  //фокусировка на имени задачи при её редактировании
  useEffect(() => {
    ref.current && ref.current.focus();
  }, [isEditable]);

  const toggleTodoStatus = () => dispatch(actions.todo.toggle(id));
  const updateTodoTitle = (id, taskTitle) => {
    dispatch(actions.todo.update({ id, taskTitle }));
    setIsEditable(false);
  };

  function editTaskTitle() {
    setIsEditable(true);
  }

  function openModalWindow() {
    setModalActive(true);
  }

  return (
    <div className={`task ${completed ? "task-fulfilled" : ""}`}>
      <div className="task__wrapper">
        <div className="task-checkbox-wrapper">
          <input
            type="checkbox"
            className="task-checkbox"
            checked={completed}
            onChange={toggleTodoStatus}
          />
        </div>
        {isEditable ? (
          <input
            ref={ref}
            className="task-input"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onBlur={() => updateTodoTitle(id, taskTitle)}
          />
        ) : (
          <p>{title}</p>
        )}
      </div>
      <div className="task__buttons">
        <button className="task-btn" onClick={editTaskTitle}>
          <svg
            fill="#000000"
            width="26px"
            height="26px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z" />
            <path d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z" />
          </svg>
        </button>
        <button className="task-btn" onClick={openModalWindow}>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z"
              fill="#FF0000"
            />
          </svg>
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} idTask={id} />
    </div>
  );
};

// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
