import { useContext } from "react";
import { TodoItemContext } from "../store/todo-Item-context";
import TodoItem from "./TodoItem";

function TodoItemList() {
  const { todoItems } = useContext(TodoItemContext);

  return (
    <div className="container">
      {todoItems.map((item, index) => {
        return <TodoItem key={index} id={index} todoItem={item} />;
      })}
    </div>
  );
}

export default TodoItemList;