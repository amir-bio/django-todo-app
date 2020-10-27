import React, {useState} from 'react'

import './App.css';

const list = [
  {
    "id": 1,
    "title": "1st todo",
    "body": "Learn Django properly."
  },
  {
    "id": 2,
    "title": "Second item",
    "body": "Learn Python."
  },
  {
    "id": 3,
    "title": "Learn HTTP",
    "body": "It's important."
  }
]


function App() {
  const [todos, setTodos] = useState(list)
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
