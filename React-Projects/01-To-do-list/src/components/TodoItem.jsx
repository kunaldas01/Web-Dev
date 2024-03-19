import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-Item-context";


function TodoItem({ id, todoItem }) {
  const { deleteItem } = useContext(TodoItemContext);

  return (
    <div className="row custom-row">
      <div className="col-6">
        {todoItem.name}
      </div>
      <div className="col-4">
        {todoItem.dueDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger custom-button d-flex justify-content-center align-items-center" onClick={() => deleteItem(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;