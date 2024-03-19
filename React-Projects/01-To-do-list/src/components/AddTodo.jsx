import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css"
import { MdAddBox } from "react-icons/md";
import { TodoItemContext } from "../store/todo-Item-context";

function AddTodo() {
  const todoName = useRef();
  const todoDate = useRef();
  const { addNewItem } = useContext(TodoItemContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (todoName.current.value === "" || todoDate.current.value === "") {
      return;
    }
    else {
      addNewItem(todoName.current.value, todoDate.current.value);
      todoName.current.value = "";
      todoDate.current.value = "";
    }
  }

  return (
    <div className="container">
      <form className="row custom-row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input className={styles.customInput} type="text" placeholder="Add todo here" ref={todoName} />
        </div>
        <div className="col-4">
          <input className={styles.customInput} type="date" ref={todoDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success custom-button d-flex justify-content-center align-items-center">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;