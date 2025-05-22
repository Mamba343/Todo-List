import { useEffect, useState } from "react";
import Card from "./components/Card";
import { GetAllTodos, handleSubmitTodo } from "./helpers/todoHelpers";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [version, setVersion] = useState(0);

  // Handle input change for todo title
  function handleChangeInput(e) {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  }

  // Handle input change for todo description
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  // Fetch todos every time version changes
  useEffect(() => {
    GetAllTodos(setTodos);
  }, [version]);

  return (
    <div>

      {/* Input section for adding a new todo */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1>To do List</h1>

        <input
          placeholder="Todo"
          value={newTodo}
          onChange={handleChangeInput}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescription}
        />

        <button
          className="add"
          style={{
            width: "150px",
          }}
          onClick={() =>
            handleSubmitTodo(newTodo, description, setNewTodo, setDescription, setVersion)
          }
        >
          Add Item
        </button>
      </div>

      {/* Todos columns container */}
      <div className="todos-container">

        {/* Incomplete Todos */}
        <div className="todos-column">
          <h2>Incomplete Tasks</h2>
          {todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <Card key={todo.id} todo={todo} setVersion={setVersion} />
            ))}
        </div>

        {/* Completed Todos */}
        <div className="todos-column">
          <h2>Completed Tasks</h2>
          {todos
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <Card key={todo.id} todo={todo} setVersion={setVersion} />
            ))}
        </div>

      </div>
    </div>
  );
}

export default App;
