import { useState } from 'react';
import Title from "./components/Title";
import './App.css'

function App() {
const [todos, setTodos] = useState(null);
console.log(todos);


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
   .then((data) => {
    return data.json();
   })
   .then((todos) => {
     console.log(todos);
   })
   .catch((error) => {
    console.log(error);
   })
  }, [])
  return (
    <div>
      <Title title="All todos" counter={todos ?
      todos.length : 0} />
      <ul>
        {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id}>
               <h3>
                <em>Title:</em>: {todo.title}
               </h3>
               
          <p>Completed: {todo.completed ? "❌" : "✅"}</p>
         </li>
          )
        })}
                
        </ul>
    </div>
  )
}

export default App
