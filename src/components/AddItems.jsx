import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddItems({ onNewItem }) {
  let [newDate, setNewDate] = useState();
  let [newName, setNewName] = useState();

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handeleDate = (event) => {
    setNewDate(event.target.value);
  };

  const handleonNewItem = () => {
    onNewItem(newName, newDate);
    setNewName("");
    setNewDate("");
  };
  return (
    <>
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="row">
            <div class="col">
              <input
                placeholder="Enter a item here"
                value={newName}
                onChange={handleName}
              ></input>
            </div>
            <div class="col-3">
              <input type="date" value={newDate} onChange={handeleDate} />
            </div>
            <div class="col-1">
              <button className="btn btn-warning" onClick={handleonNewItem}>
              <IoIosAddCircle />

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItems;

