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


function removeTask(index){
    setTasks(tasks=>{
        const newTasks=[...tasks];
        newTasks.splice(index,1);
        return newTasks;
    })
}

function updateTask(index){
    setTasks(tasks=>{
        const newTask=[...tasks];
        newTask[index].completed = true;
        return newTask
    })
}


function pendingToDos(){
    let ct=0;
    tasks.forEach((task)=>{
        if(!task.markCompleted){
            ct++;
        }
    }
    )
    return ct
}



    return(
       <div className="todo-container">
        <div className="to-do-create-container">
       <CreateTask addTask={addTask}  />
       </div>
       <div className="task-container">
       <h3>Pending Todos {pendingToDos()}</h3>
       {tasks.map((task , index) => <Task  {...task} index={index} removeTask={removeTask} updateTask={updateTask} />)}
       </div>
       </div>
    )
}