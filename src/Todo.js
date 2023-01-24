import React from "react"
import CreateTask from "./CreateTask"
import Task from "./task";


export default function Todo(){

let [tasks ,setTasks] = React.useState([]);

    function addTask(task){
        setTasks((tasks) => {
            return [
                ...tasks,
                task
            ]
        })
    };


function pendingToDos(){
    let ct=0;
    tasks.forEach((task)=>{
        if(!task.markCompleted){
            ct++;
        }
    }
    )
    console.log(ct)
    return ct
}



    return(
       <>
       <CreateTask addTask={addTask}  />
       <h3>Pending Todos {pendingToDos()}</h3>
       {tasks.map((task , index) => <Task  {...task} />)}
       </>
    )
}