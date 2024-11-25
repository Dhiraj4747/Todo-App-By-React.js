import AddItems from "./components/AddItems";
import AddTodoItems from "./components/AddTodoItems";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemContext } from "./store/TodoItemContext";

function App() {


  let [todoItem,setTodoitem]=useState([])

  let handleNewItem =(itemName,itemDueDate)=>{
    let newItemAdded = [...todoItem,{name: itemName,
      date: itemDueDate}]
    setTodoitem(newItemAdded)
  }

  const handleDeleteButton = (itemName)=>{
    let newTodoItem = todoItem.filter(item => item.name !== itemName)
    setTodoitem(newTodoItem)
  }
  return (
    <>
    <TodoItemContext.Provider value={{
      todoItem,
      handleNewItem,
      handleDeleteButton,
    }}>
      <center className="todo-container">
        <h1>Todo App</h1>

        <AddItems></AddItems>
        <Welcomemsg></Welcomemsg>
        <AddTodoItems></AddTodoItems>
        
      </center>
      </TodoItemContext.Provider>
    </>
  );
}

export default App;
