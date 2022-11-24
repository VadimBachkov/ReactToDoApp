import React from "react";

import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import Title from "./components/Title/Title";
import ToDoForm from "./components/ToDoForm/ToDoForm";


function App() {

  const [toDoList,setToDoList] = useState([]);
  

  return (
    <div>
      <Title />
      <div class="todo-list">
        <ToDoForm setToDoList={setToDoList}/>
        {toDoList.map((item,index) => {
          return <Tasks value = {item}  setToDoList ={setToDoList} index={index}/>
        })}
        <Tasks />
      </div>
    </div>

  )
}

export default App;
