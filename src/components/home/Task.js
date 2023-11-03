import React from "react";

export default function Task({
  todo,
  handleDelete,
  handleEdit,
  updateId,
  markDone,
}) {
  return (
    <div
      key={todo.id}
      className={todo.done ? "single-task completed" : "single-task"}
    >
      <div
        onClick={() => {
          return markDone(todo.id);
        }}
      >
        {todo.important ? (
          <span className="badge warning-bg">
            <i className="fa fa-exclamation-circle"></i>
          </span>
        ) : null}
        {todo.todoText}
      </div>

      {updateId === todo.id ? (
        <button className="btn btn-primary busy-spinner" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </button>
      ) : null}

      <div className="task-actions">
        <button
          className="btn edit"
          title="Edit"
          onClick={() => handleEdit(todo)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn delete"
          title="Delete"
          onClick={() => {
            const response = window.confirm("Delete");
            if (response) {
              handleDelete(todo.id);
            }
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}
