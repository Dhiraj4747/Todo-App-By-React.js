import { TodoItemContext } from "../store/TodoItemContext";
import { useContext } from "react";

function Welcomemsg(){

   const {todoItem} = useContext(TodoItemContext)
   
   return<>
   {todoItem.length===0 && <h1>Enjoy Your Day Buddy !</h1>}
   </>
}
export default Welcomemsg;