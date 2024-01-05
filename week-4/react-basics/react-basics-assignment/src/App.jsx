import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initialTodoList = [{ id: 1, title: "todo 1", description: "description 1" }];
  const [todos, setTodos] = useState(initialTodoList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function addTodo() {
    const id = todos.length + 1;
    const newTodo = { id, title, description };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className='app-container'>
      <div className="input-box">
        <h1>Todo List</h1>
      <input
        type='text'
        placeholder='title'
        onChange={handleTitleChange}
        value={title}
      />
      <input
        type='text'
        placeholder='Description'
        onChange={handleDescriptionChange}
        value={description}
      />
      <button onClick={addTodo}>Add todo</button>
      </div>
      <hr />
      <div className="todos">

        {todos.map((todo) => {
          return (
            <div className="todo-item" key={todo.id}>
              <p><b>{todo.title}</b></p>
              <p>{todo.description}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App
