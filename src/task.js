import React from "react";
export default function Task(props){




function removeTask(){
    props.removeTask(props.index)
}
function updateTask(){
    props.updateTask(props.index);
}


return(

    <div style={{display:"flex"}}> 
    <div>{props.title}</div>
    <div>
        {!props.completed ? <button onClick={updateTask}>Mark Complete</button> : <button>Completed</button> }
        <button onClick={removeTask}>Remove Task</button>
    </div>
    </div>
)
}