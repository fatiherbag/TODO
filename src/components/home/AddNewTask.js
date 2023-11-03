import React, { useState } from "react";

export default function AddNewTask({ add, visible }) {
  const [taskText, setTaskText] = useState("");
  return (
    <div className={visible ? "showing" : "hidden"}>
      <div className="input-group">
        <div className="form-floating">
          <input
            value={taskText}
            checked={true}
            placeholder="Today will done..."
            className="form-control"
            id="addTodo"
            onChange={(event) => {
              setTaskText(event.target.value);
            }}
          />
          <label htmlFor="addTodoDone">TO-DO...</label>
        </div>
        <button
          disabled={taskText.length === 0}
          className="btn btn-theme-primary"
          id="pushbutton"
          onClick={() => {
            add(taskText);
            setTaskText("");
          }}
        >
          <i className="fas fa-plus"></i> Add Task
        </button>
      </div>
    </div>
  );
}
