import TodoItems from "./TodoItems";

function AddTodoItems({array,deleteButton}) {
  return (
    <>
      {array.map((item)=>(
         <TodoItems todoName={item.name} todoDate={item.date} onDeleteClick={deleteButton}></TodoItems>
      ))}
      
    </>
  );
}

export default AddTodoItems;
