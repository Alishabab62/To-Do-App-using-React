import React from "react";
export default function CreateTask(props) {
  let [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (value !== "") {
      props.addTask({
        title: value,
        markCompleted: false,
      });
      setValue("");
    }
    else{
      let errorMsg=document.querySelector('.error-message');
     errorMsg.style.display="block";
      setTimeout(()=>{
     errorMsg.style.display="none";
      },1000)
    }
  }

  function mouseIn(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.border = "2px solid #8884FF";
  }

  function mouseOut(event) {
    event.target.style.backgroundColor = "#D64550";
    event.target.style.color = "white";
  }
  return (
    <>
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "40px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "70%",
          height: "100%",
          borderRadius: "5px",
          fontSize: "25px",
        }}
      />
      <button
        type="submit"
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
        style={{
          width: "20%",
          height: "100%",
          borderRadius: "5px",
          border: "2px solid #8884FF",
          fontWeight: "bold",
          backgroundColor: "#D64550",
          cursor:"pointer",
          color:"white"
        }}
      >
        Add ToDo
      </button>
    </form>
    <div className="error-message" style={{color:"red" , marginTop:"20px" , display:"none"}}>Field can't be empty</div>
    </>
  );
}
