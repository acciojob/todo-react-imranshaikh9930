
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputVal,setInputVal] = useState("");
  const [tasks,setTasks] = useState([]);

  function addTask(){
    if (!inputVal){
      alert("Enter some Task");
      return ;
    }

    setTasks((prevTasks) => [...prevTasks, inputVal]);

    setInputVal("")
   

  }

  function removeTask(index){
    const updatedTask  = [...tasks];
    updatedTask.splice(index,1);
    setTasks(updatedTask);
     }

  return (
    <div>

      <h1>To-do list</h1>

      <div className="container">
        <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
        <button onClick={addTask}>Add Todo</button>
      </div>
      
      <ul>
        {
          tasks.map((item,index)=>(

            <li key={index}>
              <p>{item}</p>
              <button onClick={()=>removeTask(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
