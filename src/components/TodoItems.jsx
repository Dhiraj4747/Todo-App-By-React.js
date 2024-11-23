import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItems({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div class="container text-center todo-items">
        <div class="row justify-content-md-center">
          <div class="row">
            <div class="col">{todoName}</div>
            <div class="col-3">{todoDate}</div>
            <div class="col-1">
              <button
                className="btn btn-danger"
                onClick={() => onDeleteClick(todoName)}
              >
                <RiDeleteBin2Fill />

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
