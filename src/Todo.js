import React from "react"
import CreateTask from "./CreateTask"
import Task from "./task";


export default function Todo(){
let [tasks ,setTasks] = React.useState(JSON.parse(localStorage.getItem('tasks')) || []);
let [filter , setFilter] = React.useState(tasks);

    function addTask(task){
        console.log("add to do")
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

let pendingToDos = React.useCallback(()=>{
    let ct=0;
    tasks.forEach((task)=>{
        if(!task.markCompleted){
            ct=ct+1;
        }
    }
    )
    return ct;
},[tasks])


React.useEffect(()=>{
    console.log(tasks)
    localStorage.setItem("tasks" , JSON.stringify(tasks));
    setFilter([...tasks])
},[tasks]);

function filterTaskCompleted(){
    let completedTask=[];
    tasks.forEach((task)=>{
        console.log(task)
        if(task.markCompleted){
            completedTask.push(task)
        }
    })
    setFilter(() =>completedTask)
}

function filterTaskNotCompleted(){
    let notCompletedTask=[];
    tasks.forEach((task)=>{
        console.log(task)
        if(!task.markCompleted){
            notCompletedTask.push(task)
        }
    })
    setFilter(() =>notCompletedTask)
}

function filterReset(){
    setFilter(() =>tasks)
}



let filterBtnStyle={
    height:"100%",
    backgroundColor:"#D64550",
    fontWeight:"bold",
    margin:"0px 25px",
    border:"2px solid #8884FF",
    borderRadius:"5px",
    padding:"5px 10px",
    cursor:"pointer",
    color:"white"
}



    return(
       <div className="todo-container" style={{marginTop:"100px" , width:"80%" ,display:"flex" , alignItems:"center" , flexDirection:"column"}}>
        <div className="to-do-create-container" style={{width:"80%"}}>
       <CreateTask addTask={addTask}  />
       </div>
       <div className="task-container" style={{width:"80%"}}>
        <div style={{display:"flex" , height:"40px" , alignItems:"center" , marginTop:"25px"}}>
       <h3 style={{margin:"20px 0px" , fontSize:"25px" }}>Pending Todos {pendingToDos()}</h3>
       <button style={filterBtnStyle} onClick={filterTaskCompleted}>Complete Task</button>
       <button style={filterBtnStyle} onClick={filterTaskNotCompleted} >Not Complete Task</button>
       <button style={filterBtnStyle} onClick={filterReset}>Reset Filter</button>
       </div>
       {filter.map((task , index) => <Task  {...task} index={index}  removeTask={removeTask} updateTask={updateTask} />)}
       </div>
       </div>
    )
}