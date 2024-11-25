import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddItems() {

  
  const {handleNewItem,todoItem} = useContext(TodoItemContext)
  

  const todoItemNameref = useRef("");
  const todiItemDuedate = useRef("");

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handeleDate = (event) => {
    setNewDate(event.target.value);
  };

  const handleonNewItem = (event) => {
    event.preventDefault();
    const newName = todoItemNameref.current.value;
    const newDate = todiItemDuedate.current.value;
    handleNewItem(newName, newDate);
    
  };
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <form onSubmit={handleonNewItem}>
            <div className="row">
              <div className="col">
                <input
                  placeholder="Enter a item here"
                  ref={todoItemNameref}
                  
                ></input>
              </div>
              <div className="col-3">
                <input
                  type="date"
                  ref={todiItemDuedate}
                  
                />
              </div>
              <div className="col-1">
                <button className="btn btn-warning" >
                  <IoIosAddCircle />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddItems;
