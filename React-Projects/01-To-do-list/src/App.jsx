import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItemList from "./components/TodoItemList";
import TodoItemContextProvider from "./store/todo-Item-context";

function App() {
  return (
    <TodoItemContextProvider>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItemList />
      </div>
    </TodoItemContextProvider>
  )
}

export default App
