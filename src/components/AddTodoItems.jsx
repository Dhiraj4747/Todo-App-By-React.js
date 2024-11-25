import TodoItems from "./TodoItems";
import { TodoItemContext } from "../store/TodoItemContext";
import { useContext } from "react";

function AddTodoItems() {

  const {handleDeleteButton,todoItem} = useContext(TodoItemContext)
  

  return (
    <>
      {todoItem.map((item)=>(
         <TodoItems key={item.name} todoName={item.name} todoDate={item.date} onDeleteClick={handleDeleteButton}></TodoItems>
      ))}
      
    </>
  );
}

export default AddTodoItems;
