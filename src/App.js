import { Provider } from "react-redux";
import { store } from "./redux/store";
import { TodoForm } from "./component/TodoForm";
import { TodoList } from "./component/TodoList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <h1 className="todo-title">Todo List</h1>
          <div className="todo-wrapper">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
