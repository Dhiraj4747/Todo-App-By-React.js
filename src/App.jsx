import AddItems from "./components/AddItems";
import AddTodoItems from "./components/AddTodoItems";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";


function App() {


  let [todoItem,setTodoitem]=useState([])

  let handleNeItem =(itemName,itemDueDate)=>{
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
      <center className="todo-container">
        <h1>Todo App</h1>

        <AddItems onNewItem={handleNeItem}></AddItems>
        {todoItem.length === 0 && <Welcomemsg></Welcomemsg>}
        <AddTodoItems array={todoItem} deleteButton={handleDeleteButton}></AddTodoItems>
        
      </center>
    </>
  );
}

export default App;
