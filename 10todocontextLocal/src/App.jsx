import { use, useEffect, useState } from "react";
import { TodoProvider } from "./Contexts";
import "./App.css";


function App() {
  const [todos , setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((oldtodo)=>[{id : Date.now(),...todo},...oldtodo] )
  } 
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) => 
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
};
const deleteTodo = (id) => {
  setTodos((prevTodos)=> prevTodos.filter((todo)=>todo.id !== id))
}
const toggleComplete =(id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo ,completed : !prevTodo.completed}  : prevTodo ))
}
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length >0) {
    setTodos(todos)
  }
},[])

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos ))
},[todos])

  return (
    <TodoProvider value ={{addTodo,updateTodo,todos,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
