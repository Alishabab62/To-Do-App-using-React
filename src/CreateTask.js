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
  }

  function mouseIn(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.border = "5px solid aquamarine";
  }

  function mouseOut(event) {
    event.target.style.backgroundColor = "aquamarine";
  }
  return (
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
          border: "none",
          fontWeight: "bold",
          backgroundColor: "aquamarine",
          cursor:"pointer"
        }}
      >
        Add ToDo
      </button>
    </form>
  );
}
