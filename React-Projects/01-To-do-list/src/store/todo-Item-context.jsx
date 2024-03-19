import { createContext, useReducer } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

// Pure Function
function todoItemsReducer(currTodoItem, action) {
  let newTodoItem = currTodoItem;

  if (action.type === "ADD_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      {
        name: action.payload.name,
        deuDate: action.payload.dueDate
      }
    ]
  }
  else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter((item, index) => index !== action.payload.id);
  }

  return newTodoItem;
}

function TodoItemContextProvider({ children }) {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function addNewItem(todoItem, todoDate) {
    dispatchTodoItems({
      type: "ADD_ITEM",
      payload: {
        name: todoItem,
        dueDate: todoDate
      }
    });
  }

  function deleteItem(id) {
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payload: {
        id: id,
      }
    });
  }

  return (
    <TodoItemContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }} >
      {children}
    </TodoItemContext.Provider>
  );
}

export default TodoItemContextProvider;