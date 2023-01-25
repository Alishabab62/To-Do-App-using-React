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
        newTask[index].markCompleted = true;
        return newTask
    })
}


function pendingToDos(){
    let ct=0;
    tasks.forEach((task)=>{
        if(!task.markCompleted){
            ct=ct+1;
        }
    }
    )
    return ct
}

React.useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(tasks));
},[tasks]);


React.useEffect(() => {
    let t = localStorage.getItem('tasks');
    t = JSON.parse(t);
    setTasks(() => t);
}, []);


    return(
       <div className="todo-container" style={{marginTop:"100px" , width:"80%" ,display:"flex" , alignItems:"center" , flexDirection:"column"}}>
        <div className="to-do-create-container" style={{width:"80%"}}>
       <CreateTask addTask={addTask}  />
       </div>
       <div className="task-container" style={{width:"80%"}}>
       <h3 style={{margin:"20px 0px" , fontSize:"25px" }}>Pending Todos {pendingToDos()}</h3>
       {tasks.map((task , index) => <Task  {...task} index={index} removeTask={removeTask} updateTask={updateTask} />)}
       </div>
       </div>
    )
}