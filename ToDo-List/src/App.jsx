import { useState } from "react";
import "./styles.css";
import { TodoForm } from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { title: title, id: Math.random() }];
    });
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" autocomplete="off"></input>
                {todo.title}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
