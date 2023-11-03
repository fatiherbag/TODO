import React from "react";

export default function TaskEditForm({
  todoTask,
  setToDoTask,
  update,
  visible,
  setAddOrEdit,
}) {
  return (
    <div className={visible ? "showing" : "hidden"}>
      <div className="input-group">
        <div className="form-floating">
          <input
            value={todoTask.todoText}
            checked={true}
            onChange={(event) => {
              setToDoTask({ ...todoTask, todoText: event.target.value });
            }}
            placeholder="Update To-do..."
            className="form-control"
            id="addTodo"
          />
          <label htmlFor="addTodoDone"> Update To-do...</label>
        </div>

        <button className="btn btn-theme-primary" id="push" onClick={update}>
          Update Task
        </button>
        <button
          className="btn btn-theme-primary"
          id="push"
          onClick={() => {
            setAddOrEdit("add");
          }}
        >
          Cancel
        </button>
      </div>
      <div className="task-modifier">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todoTask.important}
            id="importantCheckbox"
            onChange={() => {
              setToDoTask({ ...todoTask, important: !todoTask.important });
            }}
          />
          <label className="form-check-label" htmlFor="importantCheckbox">
            Important
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todoTask.done}
            id="doneCheckbox"
            onChange={() => {
              setToDoTask({ ...todoTask, done: !todoTask.done });
            }}
          />
          <label className="form-check-label" htmlFor="doneCheckbox">
            Done
          </label>
        </div>
      </div>
    </div>
  );
}
