import React from "react"
export default function CreateTask(props){
let [value , setValue] =React.useState("");

function handleSubmit(event){
    event.preventDefault();
    props.addTask({
        title:value,
        markCompleted:false
    })
    setValue("");
}
    return(
        <form onSubmit={handleSubmit}  style={{width:"100%" , display:"flex" , justifyContent:"space-between" , height:"40px"}}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{width:"70%" , height:"100%" , borderRadius:"5px" , fontSize:"25px"}} />
            <button type="submit" style={{width:"20%" , height:"100%" , borderRadius:"5px" , border:"none" , fontWeight:"bold"}}>Add ToDo</button>
        </form>
    )
}