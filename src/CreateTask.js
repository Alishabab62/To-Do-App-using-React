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
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}