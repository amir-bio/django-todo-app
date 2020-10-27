import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './App.css';


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/")
    .then(res => {
      setTodos(res.data)
    })
    .catch(err => {
      console.error(err)
    })}, [])

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
