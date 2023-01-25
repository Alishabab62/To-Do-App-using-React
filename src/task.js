import React from "react";
export default function Task(props){

function removeTask(){
    props.removeTask(props.index)
}
function updateTask(){
    props.updateTask(props.index);
}

return(

    <div style={{display:"flex" , backgroundColor:"aquamarine" ,height:"60px", width:"100%" , alignItems:"center" , justifyContent:"space-between" , borderRadius:"5px" , margin:"20px 0px"}}> 
    <div style={{fontSize:"25px", marginLeft:"20px"}}>{props.title}</div>
    <div style={{height:"60%" , display:"flex" , alignItems:"center" ,marginRight:"20px"}}>
        {!props.markCompleted? <button onClick={updateTask} style={{border:"none" , borderRadius:"5px" , padding:"10px 10px" , fontWeight:"bold"}}>Mark Complete</button> : <button style={{height:"100%" , border:"none" , borderRadius:"5px" , padding:"5px" , fontWeight:"bold"}}>Completed</button> }
        <button onClick={removeTask} style={{border:"none" , borderRadius:"5px" , marginLeft:"10px" , padding:"10px 10px" , fontWeight:"bold"}}>Remove Task</button>
    </div>
    </div>
)
}